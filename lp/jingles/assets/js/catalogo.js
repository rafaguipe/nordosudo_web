/* Catálogo de músicas — fonte única: assets/catalogo.json
   Renderiza cards, players e filtros. Sem dependências.
   Para publicar uma música nova: editar apenas o JSON. */
(function () {
  "use strict";

  var scriptEl = document.currentScript ||
    (function () { var s = document.querySelectorAll('script[src$="catalogo.js"]'); return s[s.length - 1]; })();
  var base = scriptEl.src.replace(/assets\/js\/catalogo\.js.*$/, "");
  var cardsEl = document.getElementById("cards");
  if (!cardsEl) return;

  var loc = (document.documentElement.lang || "pt-BR").slice(0, 2).toLowerCase();
  if (["pt", "es", "en"].indexOf(loc) < 0) loc = "pt";

  var txt = {
    erro: {
      pt: "Não foi possível carregar o catálogo agora.",
      es: "No se pudo cargar el catálogo ahora.",
      en: "We couldn’t load the catalog right now."
    },
    waErro: {
      pt: "Falar no WhatsApp",
      es: "Hablar por WhatsApp",
      en: "Chat on WhatsApp"
    },
    alt: {
      pt: "Capa de ",
      es: "Portada de ",
      en: "Cover of "
    }
  };

  var ROT = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function waLink(num, msg) {
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
  }

  function track(nome, params) {
    if (typeof window.gtag === "function") window.gtag("event", nome, params || {});
  }

  function itemHTML(item) {
    var msg = ROT.msgModelo.replace("{titulo}", item.titulo);
    var href = waLink(ROT.whatsapp, msg);
    return '' +
      '<article class="card" data-cat="' + esc(item.categoria) + '" data-id="' + esc(item.id) + '">' +
        '<img class="cover" src="' + esc(base + item.capa) + '" alt="' + esc(txt.alt[loc] + item.titulo) + '"' +
        ' width="1000" height="1000" loading="lazy" decoding="async">' +
        '<div class="card-body">' +
          '<div class="pills">' +
            '<span class="pill">' + esc(item.estilo[loc]) + '</span>' +
            '<span class="pill pill-lang">' + esc(ROT.idiomas[item.idioma][loc]) + '</span>' +
          '</div>' +
          '<h3>' + esc(item.titulo) + '</h3>' +
          '<p>' + esc(item.descricao[loc]) + '</p>' +
          '<div class="audio-wrap">' +
            '<audio controls preload="none" aria-label="' + esc(ROT.escutar[loc] + ": " + item.titulo) + '">' +
              '<source src="' + esc(base + item.audio) + '" type="audio/mpeg">' +
            '</audio>' +
            '<span class="audio-meta">' + esc(item.duracao) + '</span>' +
          '</div>' +
          '<div class="card-links">' +
            '<a href="' + esc(base + item.letra) + '" target="_blank" rel="noopener" data-acao="letra">' +
              esc(ROT.letra[loc]) + '</a>' +
            '<a class="card-cta" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer" data-acao="wa">' +
              esc(item.cta[loc]) + '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* Renderiza todos os cards uma única vez — filtrar não destrói os players. */
  function render(itens) {
    cardsEl.innerHTML = itens.map(itemHTML).join("");

    Array.prototype.forEach.call(cardsEl.querySelectorAll("audio"), function (a) {
      a.addEventListener("play", function () {
        var card = a.closest(".card");
        track("escutar_musica", { item_id: card ? card.dataset.id : "" });
      });
    });

    Array.prototype.forEach.call(cardsEl.querySelectorAll("[data-acao]"), function (a) {
      a.addEventListener("click", function () {
        var card = a.closest(".card");
        track(a.dataset.acao === "wa" ? "clicar_whatsapp" : "abrir_letra", {
          item_id: card ? card.dataset.id : "",
          origem: "portfolio"
        });
      });
    });
  }

  function aplicarFiltro(cat) {
    var visiveis = 0;
    Array.prototype.forEach.call(cardsEl.querySelectorAll("article.card"), function (card) {
      var mostra = cat === "todas" || card.dataset.cat === cat;
      if (mostra) { card.removeAttribute("hidden"); visiveis++; }
      else { card.setAttribute("hidden", ""); }
    });
    var vazio = cardsEl.querySelector(".empty");
    if (!visiveis) {
      if (!vazio) {
        vazio = document.createElement("p");
        vazio.className = "empty";
        cardsEl.appendChild(vazio);
      }
      vazio.textContent = ROT.vazio[loc];
    } else if (vazio) {
      vazio.parentNode.removeChild(vazio);
    }
  }

  function buildFilters() {
    var box = document.getElementById("filtros");
    if (!box) return;
    var ordem = ["todas", "empresas", "eventos", "pessoais"];
    box.innerHTML = ordem.map(function (cat) {
      return '<button type="button" class="btn-filter" data-filter="' + cat + '" aria-pressed="' +
        (cat === "todas" ? "true" : "false") + '">' + esc(ROT.filtros[cat][loc]) + '</button>';
    }).join("");

    box.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".btn-filter");
      if (!btn) return;
      Array.prototype.forEach.call(box.querySelectorAll(".btn-filter"), function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      aplicarFiltro(btn.dataset.filter);
      track("filtrar_categoria", { categoria: btn.dataset.filter });
    });
  }

  fetch(base + "assets/catalogo.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then(function (d) {
      ROT = {
        whatsapp: d.whatsapp,
        msgModelo: d.msg_modelo[loc],
        idiomas: d.rotulos.idiomas,
        filtros: d.rotulos.filtros,
        letra: d.rotulos.letra,
        escutar: d.rotulos.escutar,
        vazio: d.rotulos.vazio
      };
      var itens = d.itens.filter(function (i) { return i.publicado; })
        .sort(function (a, b) { return a.ordem - b.ordem; });
      buildFilters();
      render(itens);
    })
    .catch(function (err) {
      console.error("catalogo.json:", err);
      cardsEl.innerHTML = '<p class="empty">' + esc(txt.erro[loc]) +
        ' <a href="https://wa.me/5511943971961" target="_blank" rel="noopener noreferrer">' +
        esc(txt.waErro[loc]) + '</a></p>';
    });
})();
