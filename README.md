# Nordosudo Website

Site oficial da Nordosudo — plataforma boutique de internacionalização para alimentos e bebidas não alcoólicas.

## 🌐 URL

- **Produção:** [nordosudo.com](https://nordosudo.com)
- **GitHub Pages:** [rafaguipe.github.io/nordosudo_web](https://rafaguipe.github.io/nordosudo_web)

## 📄 Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `index.html` | Landing page com visão geral dos produtos |
| #BoraExportar | `boraexportar.html` | Prontidão e estruturação exportadora |
| US Market Development | `usmarket.html` | Construção de presença comercial nos EUA |
| Quem Somos | `quem-somos.html` | Sobre a Nordosudo |
| Contato | `contato.html` | Formulário de contato |

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Navy | `#0B1D3A` | Backgrounds escuros, textos, navbar |
| Navy Light | `#132B52` | Variações de fundo |
| Navy Dark | `#071224` | Footer |
| Gold | `#C9A84C` | Acentos, CTAs, destaques |
| Gold Light | `#D4B96A` | Hover states |
| Gold Dark | `#A88B3D` | Texto alternativo |
| Off White | `#F8F6F2` | Backgrounds claros |
| Gray 600 | `#5C5854` | Texto secundário |
| Gray 800 | `#2E2B28` | Texto principal |

## 🔤 Tipografia

- **Títulos:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — serifada, elegante
- **Corpo:** [Inter](https://fonts.google.com/specimen/Inter) — sans-serif, legível

## 🛠 Stack Tecnológico

- **Hospedagem:** GitHub Pages (domínio customizado via Porkbun)
- **Frontend:** HTML5, CSS3, JavaScript (vanilla, sem frameworks)
- **CSS:** Custom properties, Grid, Flexbox, animações nativas
- **JS:** Intersection Observer, smooth scroll, mobile menu
- **Analytics:** Google Analytics 4 (GA4)
- **SEO:** Meta tags, Open Graph, structured data (JSON-LD)

## 📁 Estrutura

```
nordosudo_web/
├── index.html              # Home
├── boraexportar.html       # Produto #BoraExportar
├── usmarket.html           # Produto US Market Development
├── quem-somos.html         # Quem Somos
├── contato.html            # Contato
├── styles.css              # Estilos globais
├── script.js               # Scripts globais
├── 404.html                # Página 404 customizada
├── robots.txt              # Instruções para crawlers
├── sitemap.xml             # Sitemap para SEO
├── .nojekyll               # Desativa Jekyll no GitHub Pages
└── README.md
```

## ⚙️ Configuração do Domínio

O domínio `nordosudo.com` está registrado no [Porkbun](https://porkbun.com) e aponta para GitHub Pages via DNS:

- **A Records:** apontam para IPs do GitHub Pages
- **CNAME:** `www` → `rafaguipe.github.io`
- O arquivo `CNAME` na raiz do repositório contém `nordosudo.com`

## 🚀 Deploy

Push para `main` — o GitHub Pages faz deploy automático.

```bash
git add .
git commit -m "descrição"
git push origin main
```

## 📊 Analytics

Google Analytics 4 configurado. O ID de medição está no `script.js` e em todas as páginas via `gtag.js`.

## 📝 Notas

- Sem framework — tudo vanilla para máxima performance
- Imagens devem ser otimizadas (WebP quando possível)
- Manter acessibilidade (WCAG 2.1 AA) como prioridade
