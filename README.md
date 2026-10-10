# Nordosudo Website — atualizado em 10/10/2026

Site oficial da Nordosudo — plataforma boutique de internacionalização para alimentos e bebidas não alcoólicas.

## 🌐 URL

- **Produção:** [nordosudo.com](https://nordosudo.com)
- **GitHub Pages:** [rafaguipe.github.io/nordosudo_web](https://rafaguipe.github.io/nordosudo_web)

## 📄 Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `index.html` | Landing page com visão geral dos produtos |
| BoraExportar | `boraexportar.html` | Prontidão e estruturação exportadora |
| BoraUSA | `usmarket.html` | Construção de presença comercial nos EUA |
| Quem Somos | `quem-somos.html` | Sobre a Nordosudo, fundadores e abordagem |
| Blog | `blog.html` | Listagem de artigos (link no navbar) |
| Contato | `contato.html` | Contato institucional (comercial@nordosudo.com) |
| Avaliação BoraExportar | `avaliacao-boraexportar.html` | Formulário de prontidão exportadora (Zoho Bigin) |
| Avaliação BoraUSA | `avaliacao-borausa.html` | Formulário de oportunidades nos EUA (Zoho Bigin) |
| Obrigado BoraExportar | `obrigado-boraexportar.html` | Página pós-envio consultiva (booking + FAQ) |
| Obrigado BoraUSA | `obrigado-borausa.html` | Confirmação de avaliação recebida |
| Política de Privacidade | `politica-de-privacidade.html` | LGPD |
| Termos de Uso | `termos-de-uso.html` | LGPD |
| Política de Cookies | `politica-de-cookies.html` | LGPD |
| 404 | `404.html` | Página de erro customizada |

## ✍️ Blog

- **`blog.html`** — página de listagem de artigos.
- **`blog/`** — 37 artigos (12 migrados do LinkedIn + produção nova contínua).
- **`assets/blog/`** — capas otimizadas, uma pasta por artigo.
- **`tools/blog-manager.html`** — gerenciador interno de blog: cria/exclui posts e atualiza `blog.html`, `sitemap.xml` e assets num único commit atômico.

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
- **Analytics:** Google Analytics 4 (GA4) — `G-67WRFL96L2`
- **Ads:** Google Ads tag — `AW-18326183646`
- **Formulários:** Zoho Bigin (embeds BoraExportar e BoraUSA)
- **SEO:** Meta tags, Open Graph, structured data (JSON-LD), sitemap (43 URLs)

## 📁 Estrutura

```
nordosudo_web/
├── index.html                    # Home
├── boraexportar.html             # Produto BoraExportar
├── usmarket.html                 # Produto BoraUSA
├── quem-somos.html               # Quem Somos
├── contato.html                  # Contato institucional
├── blog.html                     # Listagem do blog
├── avaliacao-boraexportar.html   # Avaliação BoraExportar (Zoho Bigin)
├── avaliacao-borausa.html        # Avaliação BoraUSA (Zoho Bigin)
├── obrigado-boraexportar.html    # Pós-envio BoraExportar
├── obrigado-borausa.html         # Pós-envio BoraUSA
├── politica-de-privacidade.html  # LGPD
├── termos-de-uso.html            # LGPD
├── politica-de-cookies.html      # LGPD
├── 404.html                      # Página 404 customizada
├── analytics.html                # Snippet GA4/Ads (parcial)
├── styles.css                    # Estilos globais
├── page-styles.css               # Estilos das páginas novas (blog, legais, obrigado)
├── script.js                     # Scripts globais (null-guards, cache-buster)
├── robots.txt                    # Instruções para crawlers
├── sitemap.xml                   # Sitemap para SEO
├── CNAME                         # nordosudo.com
├── .nojekyll                     # Desativa Jekyll no GitHub Pages
├── blog/                         # 37 artigos
├── assets/                       # Imagens (blog/, rafael-guimaraes.*, vania-cabral.jpg)
├── tools/                        # blog-manager.html
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

- **GA4:** `G-67WRFL96L2` (no `script.js` e em todas as páginas via `gtag.js`)
- **Google Ads:** `AW-18326183646`

## 📝 Notas

- Sem framework — tudo vanilla para máxima performance
- Imagens devem ser otimizadas (WebP quando possível)
- Manter acessibilidade (WCAG 2.1 AA) como prioridade
- `script.js` é referenciado com cache-buster `?v=` para forçar atualização de CDN

---

## 🗓️ Atualizações desde a última edição (2026-06-27 → 2026-10-10)

**Blog (novo)**
- Adicionado `blog.html` + diretório `blog/` com 37 artigos (12 migrados do LinkedIn, restante produção nova) e capas em `assets/blog/`.
- Link "Blog" adicionado ao navbar das páginas internas.
- Criado `tools/blog-manager.html`, com exclusão de post removendo card do `blog.html`, URL do `sitemap.xml` e assets num único commit atômico.
- `sitemap.xml` expandido para 43 URLs.

**Páginas novas**
- `obrigado-boraexportar.html` — overhaul de CRO: página consultiva, booking prioritário, FAQ, credenciais e barra de progresso.
- `obrigado-borausa.html` — confirmação de avaliação.
- `avaliacao-boraexportar.html` e `avaliacao-borausa.html` — formulários de avaliação separados do contato institucional.
- Páginas legais (LGPD): `politica-de-privacidade.html`, `termos-de-uso.html`, `politica-de-cookies.html`.
- `analytics.html` — snippet GA4/Ads.

**Redesigns e integrações**
- `quem-somos.html` reformulado: fundadores, abordagem, por que Nordosudo, dois caminhos.
- Embed de formulários **Zoho Bigin** em BoraExportar e BoraUSA (substituindo forms quebrados/iframes).
- `contato.html`: removido `contato@`, mantido apenas `comercial@`.
- Tags adicionadas em todas as páginas: GA4 `G-67WRFL96L2` + Google Ads `AW-18326183646`.

**Técnico**
- Novo `page-styles.css` com os estilos das páginas adicionadas.
- `script.js`: null-guards para navbar/mobile menu em páginas que não os possuem; cache-buster `?v=2`.
- Assets de fundadores: `rafael-guimaraes.jpg/.png`, `vania-cabral.jpg`.
