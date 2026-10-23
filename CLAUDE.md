# CLAUDE.md

Orientações para o Claude Code (claude.ai/code) ao trabalhar neste repositório.

## Visão geral

Portfólio pessoal estático (Thiago Gomes Araújo, cibersegurança / SOC N1), publicado no GitHub Pages em **https://thi-araujo.github.io**. HTML + CSS + JavaScript puro: sem build, sem dependências, sem testes.

Todo o texto visível, comentários e identificadores estão em **português do Brasil** — mantenha novos conteúdos e nomes no mesmo padrão (`PROJETOS`, `CERTIFICACOES`, `descricao`, `emAndamento`, etc.).

O site inteiro são três arquivos: `index.html`, `style.css`, `script.js`.

## Executando localmente

Abra `index.html` direto no navegador ou sirva a pasta:

```
python -m http.server 8000
```

## Publicação

Esta pasta é um clone de `https://github.com/thi-araujo/thi-araujo.github.io` (remote `origin`, branch `main`). O GitHub Pages serve a raiz da `main`, então **todo `git push` vai ao ar em ~1 minuto** — commit e push só quando o usuário pedir. `.idea/` (PyCharm) fica fora do git via `.gitignore`.

## Arquitetura

**SPA com roteamento por hash.** `index.html` contém todas as páginas como blocos `<main class="page-view" data-page="...">` (`home`, `sobre`, `skills`, `projetos`, `contato`). `script.js` lê `location.hash` (`#/home`, `#/sobre`, …), alterna a classe `.active` no `.page-view` e no `.nav-link[data-route]` correspondentes, e cai em `home` para hashes desconhecidos. Adicionar uma página exige três coisas: um novo bloco `page-view` no HTML, um link de navegação com `data-route` e o nome da rota em `VALID_ROUTES` no `script.js`.

**Seções guiadas por dados.** Projetos e certificações não ficam no HTML — são os arrays `PROJETOS` e `CERTIFICACOES` no topo do `script.js`, renderizados em `#projects-grid`, `#home-projects-preview` (os 3 primeiros projetos) e `#page-skills .cert-grid`. Para mudar esse conteúdo, edite os arrays.
- Projeto: `periodo` e `github` são opcionais; `statusType: "active"` gera badge âmbar, qualquer outro valor gera badge verde "concluído". O texto do badge vem de `status`.
- Certificação: `emAndamento: true` adiciona o badge "Em andamento".
- Os valores são interpolados direto em `innerHTML` — não use `<`/`&` crus nos textos.

O restante (experiência, formação, skills, contato, certificação em destaque, métricas da home, palavras do efeito de digitação em `data-words` do `#typing-text`) é marcação estática no `index.html`.

**Animações de fade-in.** Elementos com `data-fade` recebem `.visible` via IntersectionObserver, reativado a cada troca de rota apenas na página ativa. Conteúdo renderizado dinamicamente precisa estar dentro de um container `data-fade` (ou não depender dele) para aparecer.

**Estilo.** `style.css` usa design tokens em `:root` (`--color-*`, `--space-*`, `--radius-*`, `--font-sans`/`--font-mono`, `--transition-*`, etc.) — use-os em vez de valores fixos. Tema escuro único estilo "terminal", mobile-first com breakpoints em 768px e 1280px. As fontes (Inter, JetBrains Mono) do Google Fonts são o único recurso externo.
