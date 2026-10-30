# Landing page — Jingles e músicas personalizadas

Destino sugerido: `https://nordosudo.com/lp/jingles/`

## Conteúdo incluído

- `index.html`: página responsiva em português, SEO e compartilhamento social.
- `assets/*.png`: três capas originais já conhecidas.
- `assets/*-letra.pdf`: três PDFs já produzidos.

## Passos antes de publicar

1. Copie os MP3 da sua pasta Nextcloud para `assets/`, **renomeando exatamente**:
   - `Nordosudo — Conectando Horizontes.mp3` → `nordosudo.mp3`
   - `Ansenuza Emprende.mp3` → `ansenuza.mp3`
   - `Caio y Açaí.mp3` → `caio-acai.mp3`
   **Esses arquivos não vieram anexados e não estão no ZIP.**
2. Em `index.html`, configure `const WHATSAPP_NUMBER = '';` com seu número comercial no formato DDI+DDD+número, apenas dígitos (ex.: `5511999999999`). Enquanto vazio, o link abre o WhatsApp para escolher destinatário; para vendas, configure o número.
3. Envie todo o conteúdo da pasta para `/lp/jingles/` no seu servidor ou repositório GitHub. Se usar GitHub Pages com um caminho diferente, revise as tags `og:url` e `og:image`.
4. Teste os três players, PDFs, WhatsApp, visualização no celular e preview de compartilhamento.
5. Caso queira GA4, acrescente seu ID real e os eventos de conversão. Nenhum código de analytics foi inventado ou instalado.

## Estratégia comercial

Sem preços públicos na primeira versão. Os CTAs levam ao WhatsApp com mensagem diferente para empresa, evento e pet. Isso permite avaliar a demanda por segmento antes de estabelecer pacotes e preços.

## Notas

- Os arquivos de capa/PDF foram copiados dos materiais disponíveis nesta conversa; não são mockups.
- O nome `histórias♫música` é um **título provisório visual**, não uma marca registrada nem um nome aprovado.
- Os arquivos de áudio não estão incluídos porque só foram mostrados em capturas de tela.
- A página usa Google Fonts (Manrope e DM Sans), com fontes de sistema como fallback.
