// ============================================================
// Portfólio — Thiago Gomes Araújo
// HTML + CSS + JS puro, sem dependências externas
// ============================================================

// ------------------------------------------------------------
// Dados — certificações e projetos (renderizados via JS)
// ------------------------------------------------------------
const CERTIFICACOES = [
  { badge: "🛡️", nome: "Especialização em Blue Team", emissor: "Hackers do Bem", data: "Em andamento", emAndamento: true },
  { badge: "🔰", nome: "Hackers do Bem — Nivelamento (80h) + Básico (64h)", emissor: "RNP", data: "08/2025" },
  { badge: "🎓", nome: "Cybersecurity (120h)", emissor: "FIAP", data: "08/2025" },
  { badge: "🌐", nome: "Introdução à Cibersegurança, Conceitos Básicos de Redes, Dispositivos de Rede e Configuração Inicial, Segurança de Endpoint", emissor: "Cisco Networking Academy", data: "09/2025" },
  { badge: "🚀", nome: "AWS re/Start Graduate", emissor: "Escola da Nuvem", data: "01/2026" },
  { badge: "☁️", nome: "Cloud Fundamentals, Administration and Solution Architect (80h)", emissor: "FIAP", data: "08/2025" },
  { badge: "⚙️", nome: "DevOps & Agile Culture (60h)", emissor: "FIAP", data: "09/2025" },
  { badge: "🐧", nome: "Linux Fundamentals (40h)", emissor: "FIAP", data: "08/2025" },
  { badge: "🐍", nome: "Python Development (80h)", emissor: "FIAP", data: "08/2025" },
  { badge: "🧩", nome: "Engenharia de Software (100h)", emissor: "FIAP", data: "08/2025" },
  { badge: "🗣️", nome: "Inglês Intermediário", emissor: "Microcamp", data: "2015" },
];

const PROJETOS = [
  {
    nome: "Firewall OPNsense em Rede Segmentada",
    periodo: "2026 — Atual",
    descricao:
      "Instalação e configuração de firewall OPNsense com segmentação de rede em VLANs, regras de firewall entre segmentos, DHCP por VLAN e bloqueio de tráfego baseado em domínio, aplicando conceitos de defesa em profundidade, controle de acesso e monitoramento de tráfego em ambiente próprio de estudo.",
    stack: ["OPNsense", "VLANs", "DHCP", "Firewall"],
    status: "Em andamento",
    statusType: "active",
  },
  {
    nome: "Projeto de Automação com Python",
    periodo: "01/2023 — 03/2024",
    descricao:
      "Desenvolvimento de scripts Python para automação de tarefas de backup e monitoramento de sistemas, utilizando libs como os, subprocess e pandas para análise e tratamento de logs de servidores, gerando relatórios automatizados de disponibilidade e falhas.",
    stack: ["Python", "os", "subprocess", "pandas"],
    status: "Concluído",
    statusType: "done",
  },
  {
    nome: "Home Lab AWS",
    periodo: "09/2025 — Atual",
    descricao:
      "Implementação de ambiente AWS para estudos práticos, configurando EC2, S3, RDS e VPC, aplicando conceitos de segurança com IAM, políticas de acesso e monitoramento via CloudWatch.",
    stack: ["AWS EC2", "S3", "RDS", "VPC", "IAM", "CloudWatch"],
    status: "Em andamento",
    statusType: "active",
  },
  {
    nome: "ITSM ENTERPRISE",
    descricao:
      "Sistema ServiceDesk/ITSM inspirado no ServiceNow. Gestão de incidentes, SLA tracking, RBAC, CMDB, escalação N1→N2→N3 e dashboards interativos.",
    stack: ["Django", "SQLite", "Bootstrap 5", "Plotly", "Chart.js"],
    status: "Em desenvolvimento",
    statusType: "active",
    github: "https://github.com/thi-araujo/itsm-enterprise",
  },
  {
    nome: "Windows Toolkit",
    descricao:
      "Ferramenta GUI de administração Windows com 200+ comandos distribuídos em 16+ módulos: AD, Hyper-V, DISM/SFC, rede e muito mais. ~1.855 linhas de código.",
    stack: ["Python", "CustomTkinter", "PowerShell", "WMI"],
    status: "Concluído",
    statusType: "done",
  },
  {
    nome: "NET ADMIN PRO",
    descricao:
      "Scanner de rede corporativo com OUI lookup, port scanning, Wake-on-LAN, histórico em SQLite e exportação para Excel. Interface tabbed unificando dois scripts distintos.",
    stack: ["Python", "CustomTkinter", "SQLite", "Nmap"],
    status: "Concluído",
    statusType: "done",
  },
  {
    nome: "Home Lab — AD + File Server",
    descricao:
      "Lab Hyper-V com Domain Controller (araujo.corp), File Server com 5 volumes via passthrough, GPOs de logon e drives, RDP/NLA e OPNsense router-on-a-stick com VLANs.",
    stack: ["Hyper-V", "Windows Server", "OPNsense", "Active Directory"],
    status: "Concluído",
    statusType: "done",
  },
];

// ------------------------------------------------------------
// Renderização de cards de projeto
// ------------------------------------------------------------
const ICON_EXTERNAL = `
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>`;

const ICON_GITHUB = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>`;

function projectCardHTML(proj) {
  const statusBadgeClass = proj.statusType === "active" ? "badge-amber" : "badge-green";
  const statusIcon = proj.statusType === "active" ? "⬤" : "✓";
  const stackBadges = proj.stack
    .map((s) => `<span class="badge badge-accent">${s}</span>`)
    .join("");
  const periodoHTML = proj.periodo ? `<p class="project-periodo">${proj.periodo}</p>` : "";
  const githubIconLink = proj.github
    ? `<a href="${proj.github}" class="project-link" aria-label="Ver código de ${proj.nome} no GitHub" target="_blank" rel="noopener noreferrer">${ICON_EXTERNAL}</a>`
    : "";
  const githubBtn = proj.github
    ? `<a href="${proj.github}" class="btn btn-ghost project-github-btn" aria-label="Abrir ${proj.nome} no GitHub" target="_blank" rel="noopener noreferrer">${ICON_GITHUB}Ver no GitHub</a>`
    : "";

  return `
    <article class="project-card" role="listitem">
      <div class="project-header">
        <div>
          ${periodoHTML}
          <h3 class="project-name">${proj.nome}</h3>
        </div>
        ${githubIconLink}
      </div>
      <p class="project-desc">${proj.descricao}</p>
      <div class="project-footer">
        <div class="badges-row" style="margin-top:0">
          <span class="badge ${statusBadgeClass}">${statusIcon}&nbsp;${proj.status}</span>
        </div>
        <div class="badges-row">${stackBadges}</div>
        ${githubBtn}
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (grid) grid.innerHTML = PROJETOS.map(projectCardHTML).join("");

  const preview = document.getElementById("home-projects-preview");
  if (preview) preview.innerHTML = PROJETOS.slice(0, 3).map(projectCardHTML).join("");
}

function renderCertifications() {
  const grid = document.querySelector("#page-skills .cert-grid");
  if (!grid) return;

  grid.innerHTML = CERTIFICACOES.map((cert) => {
    const emAndamentoTag = cert.emAndamento
      ? '<span class="badge badge-amber" style="margin-top:var(--space-sm)">Em andamento</span>'
      : "";

    return `
      <div class="cert-card">
        <span class="cert-card-badge" aria-hidden="true">${cert.badge}</span>
        <div>
          <p class="cert-card-nome">${cert.nome}</p>
          <p class="cert-card-emissor">${cert.emissor}</p>
          <p class="cert-card-data">${cert.data}</p>
          ${emAndamentoTag}
        </div>
      </div>
    `;
  }).join("");
}

// ------------------------------------------------------------
// Roteamento simples via hash (#/home, #/sobre, ...)
// ------------------------------------------------------------
const VALID_ROUTES = ["home", "sobre", "skills", "projetos", "contato"];

function getRouteFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  return VALID_ROUTES.includes(raw) ? raw : "home";
}

function renderRoute() {
  const route = getRouteFromHash();

  document.querySelectorAll(".page-view").forEach((page) => {
    page.classList.toggle("active", page.dataset.page === route);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  closeMobileMenu();
  observeFadeTargets();
}

// ------------------------------------------------------------
// Menu mobile (hambúrguer)
// ------------------------------------------------------------
function closeMobileMenu() {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;
  links.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Abrir menu");
}

function setupMobileMenu() {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) closeMobileMenu();
  });
}

// ------------------------------------------------------------
// Efeito de digitação (typing) no hero
// ------------------------------------------------------------
function setupTyping() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  let words = [];
  try {
    words = JSON.parse(el.getAttribute("data-words") || "[]");
  } catch (e) {
    words = [];
  }
  if (!words.length) return;

  const VELOCIDADE = 70;
  const PAUSA = 1800;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];

    if (!deleting && charIndex < word.length) {
      charIndex += 1;
      el.textContent = word.slice(0, charIndex);
      setTimeout(tick, VELOCIDADE);
    } else if (!deleting && charIndex === word.length) {
      deleting = true;
      setTimeout(tick, PAUSA);
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
      el.textContent = word.slice(0, charIndex);
      setTimeout(tick, VELOCIDADE / 2);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(tick, VELOCIDADE);
    }
  }

  tick();
}

// ------------------------------------------------------------
// Fade-in progressivo (Intersection Observer)
// ------------------------------------------------------------
let fadeObserver = null;

function observeFadeTargets() {
  const activePage = document.querySelector(".page-view.active");
  if (!activePage) return;

  const targets = activePage.querySelectorAll("[data-fade]:not(.visible)");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("visible"));
    return;
  }

  if (!fadeObserver) {
    fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  targets.forEach((t) => fadeObserver.observe(t));
}

// ------------------------------------------------------------
// Inicialização
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  renderProjects();
  renderCertifications();
  setupMobileMenu();
  setupTyping();

  if (!window.location.hash) window.location.hash = "#/home";
  renderRoute();

  window.addEventListener("hashchange", renderRoute);
});
