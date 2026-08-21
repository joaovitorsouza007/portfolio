document.getElementById("ano").textContent = new Date().getFullYear();

const ADMIN_USUARIO = typeof ADMIN_CONFIG !== "undefined" ? ADMIN_CONFIG.usuario : "";
const ADMIN_SENHA = typeof ADMIN_CONFIG !== "undefined" ? ADMIN_CONFIG.senha : "";
const STORAGE_PROJETOS = "projetos:v2";
const STORAGE_SESSAO = "adminLogado";
const STORAGE_METRICAS = "metricas:v1";
const STORAGE_CLIQUES = "cliques:v1";

const IMAGEM_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#1a1e29"/><text x="50%" y="50%" fill="#01c38e" font-family="sans-serif" font-size="28" text-anchor="middle" dominant-baseline="middle">Sem imagem de capa</text></svg>'
  );

const PROJETOS_PADRAO = [
  {
    id: "finview",
    titulo: "FinView",
    descricao:
      "Organizador financeiro completo com dashboard de gráficos, metas, categorização inteligente e conexão real com bancos via Open Finance (Pluggy). PWA instalável, 100% responsivo, com autenticação JWT, importação de extrato CSV, relatórios em PDF e 51 testes automatizados no backend.",
    tecnologias: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
    repositorio: "https://github.com/joaovitorsouza007/finview",
    demo: "https://finview-ivory.vercel.app/",
    imagem: "assets/finview-capa.jpg"
  },
  {
    id: "graziela-portfolio",
    titulo: "Portfólio Graziela Souza",
    descricao:
      "Site portfólio para pesquisadora e cientista social, com modo escuro/claro persistente, timeline animada de experiências, scroll animado com IntersectionObserver, download do CV e SEO otimizado (Open Graph, JSON-LD). Imagens otimizadas em WebP e deploy na Vercel.",
    tecnologias: ["React 19", "Vite 8", "Tailwind CSS v4", "JavaScript"],
    repositorio: "https://github.com/joaovitorsouza007/graziela-portfolio",
    demo: "https://graziela-portfolio.vercel.app/",
    imagem: "assets/graziela-capa.jpg"
  }
];

function carregarProjetos() {
  const salvos = localStorage.getItem(STORAGE_PROJETOS);
  if (!salvos) {
    localStorage.setItem(STORAGE_PROJETOS, JSON.stringify(PROJETOS_PADRAO));
    return [...PROJETOS_PADRAO];
  }
  try {
    return JSON.parse(salvos);
  } catch {
    return [...PROJETOS_PADRAO];
  }
}

let projetos = carregarProjetos();
let logado = localStorage.getItem(STORAGE_SESSAO) === "true";
let imagemAtual = null;

function lerJson(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

function contarVisita() {
  if (sessionStorage.getItem("visitaContada")) return;
  const m = lerJson(STORAGE_METRICAS, { visitas: 0 });
  m.visitas++;
  localStorage.setItem(STORAGE_METRICAS, JSON.stringify(m));
  sessionStorage.setItem("visitaContada", "1");
}

function registrarClique(id) {
  const cliques = lerJson(STORAGE_CLIQUES, {});
  cliques[id] = (cliques[id] || 0) + 1;
  localStorage.setItem(STORAGE_CLIQUES, JSON.stringify(cliques));
}

contarVisita();

const listaEl = document.getElementById("lista-projetos");
const btnAdmin = document.getElementById("btn-admin");
const btnNovo = document.getElementById("btn-novo-projeto");
const loginModal = new bootstrap.Modal("#loginModal");
const projetoModal = new bootstrap.Modal("#projetoModal");

function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function salvarNoStorage() {
  try {
    localStorage.setItem(STORAGE_PROJETOS, JSON.stringify(projetos));
    return true;
  } catch {
    alert("Não foi possível salvar: a imagem escolhida é grande demais para o armazenamento local. Tente uma imagem menor.");
    return false;
  }
}

function renderizarProjetos() {
  const cliques = lerJson(STORAGE_CLIQUES, {});
  const idMaisVisto = Object.entries(cliques)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  listaEl.innerHTML = projetos
    .map((p) => {
      const adminBotoes = logado
        ? `
        <div class="d-flex gap-2 mt-2">
          <button class="btn btn-outline-primary btn-sm w-100" data-editar="${p.id}">
            <i class="bi bi-pencil-fill me-1"></i>Editar
          </button>
          <button class="btn btn-outline-dark btn-sm w-100" data-excluir="${p.id}">
            <i class="bi bi-trash3-fill me-1"></i>Excluir
          </button>
        </div>`
        : "";
      const seloMaisVisto =
        p.id === idMaisVisto
          ? '<span class="badge badge-skill mb-2"><i class="bi bi-star-fill me-1"></i>Mais visto</span>'
          : "";
      return `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.imagem || IMAGEM_PLACEHOLDER}" class="card-img-top" alt="Capa do projeto ${escaparHtml(p.titulo)}" loading="lazy" decoding="async">
          <div class="card-body d-flex flex-column">
            ${seloMaisVisto}
            <h5 class="card-title">${escaparHtml(p.titulo)}</h5>
            <p class="card-text flex-grow-1">${escaparHtml(p.descricao)}</p>
            <div class="mb-3">
              ${(p.tecnologias || []).map((t) => `<span class="badge badge-skill me-1">${escaparHtml(t)}</span>`).join("")}
            </div>
            <div class="d-flex gap-2 mb-2">
              ${p.repositorio ? `<a href="${p.repositorio}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener" data-clique="${p.id}"><i class="bi bi-github me-1"></i>Repositório</a>` : ""}
              ${p.demo ? `<a href="${p.demo}" class="btn btn-primary btn-sm" target="_blank" rel="noopener" data-clique="${p.id}"><i class="bi bi-box-arrow-up-right me-1"></i>Demo</a>` : ""}
            </div>
            ${adminBotoes}
          </div>
        </div>
      </div>`;
    })
    .join("");
}

listaEl.addEventListener("click", (e) => {
  const botaoEditar = e.target.closest("[data-editar]");
  const botaoExcluir = e.target.closest("[data-excluir]");
  const linkProjeto = e.target.closest("[data-clique]");
  if (botaoEditar) abrirFormularioEdicao(botaoEditar.dataset.editar);
  if (botaoExcluir) excluirProjeto(botaoExcluir.dataset.excluir);
  if (linkProjeto) registrarClique(linkProjeto.dataset.clique);
});

function atualizarInterfaceAuth() {
  btnNovo.classList.toggle("d-none", !logado);
  document.getElementById("btn-metricas").classList.toggle("d-none", !logado);
  btnAdmin.innerHTML = logado
    ? '<i class="bi bi-unlock-fill me-1"></i>Sair'
    : '<i class="bi bi-lock-fill me-1"></i>Admin';
  renderizarProjetos();
  renderizarComentarios();
}

const metricasModal = new bootstrap.Modal("#metricasModal");
document.getElementById("btn-metricas").addEventListener("click", () => {
  const cliques = lerJson(STORAGE_CLIQUES, {});
  const visitas = lerJson(STORAGE_METRICAS, { visitas: 0 });
  const totalCliques = Object.values(cliques).reduce((soma, n) => soma + n, 0);

  document.getElementById("metrica-visitas").textContent = visitas.visitas;
  document.getElementById("metrica-cliques").textContent = totalCliques;

  const ranking = projetos
    .map((p) => ({ titulo: p.titulo, cliques: cliques[p.id] || 0 }))
    .sort((a, b) => b.cliques - a.cliques);

  document.getElementById("ranking-projetos").innerHTML = ranking
    .map(
      (r, i) => `
      <li class="list-group-item d-flex justify-content-between align-items-center ${i === 0 && r.cliques > 0 ? "fw-bold" : ""}">
        <span>${escaparHtml(r.titulo)} ${i === 0 && r.cliques > 0 ? '<span class="badge badge-skill ms-2"><i class="bi bi-star-fill me-1"></i>Mais visto</span>' : ""}</span>
        <span class="badge badge-skill-outline rounded-pill">${r.cliques} clique${r.cliques === 1 ? "" : "s"}</span>
      </li>`
    )
    .join("");

  metricasModal.show();
});

btnAdmin.addEventListener("click", () => {
  if (logado) {
    logado = false;
    localStorage.removeItem(STORAGE_SESSAO);
    atualizarInterfaceAuth();
  } else {
    document.getElementById("login-erro").classList.add("d-none");
    document.getElementById("form-login").reset();
    loginModal.show();
  }
});

document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = document.getElementById("login-usuario").value.trim();
  const senha = document.getElementById("login-senha").value;
  if (usuario === ADMIN_USUARIO && senha === ADMIN_SENHA) {
    logado = true;
    localStorage.setItem(STORAGE_SESSAO, "true");
    loginModal.hide();
    atualizarInterfaceAuth();
  } else {
    document.getElementById("login-erro").classList.remove("d-none");
  }
});

const inputImagem = document.getElementById("projeto-imagem");
const previewImagem = document.getElementById("projeto-imagem-preview");

inputImagem.addEventListener("change", () => {
  const arquivo = inputImagem.files[0];
  if (!arquivo) {
    if (!previewImagem.src.startsWith("data:image/svg")) previewImagem.classList.add("d-none");
    return;
  }
  const leitor = new FileReader();
  leitor.onload = () => {
    imagemAtual = leitor.result;
    previewImagem.src = imagemAtual;
    previewImagem.classList.remove("d-none");
  };
  leitor.readAsDataURL(arquivo);
});

btnNovo.addEventListener("click", () => abrirFormularioNovo());

function abrirFormularioNovo() {
  document.getElementById("form-projeto").reset();
  document.getElementById("projeto-id").value = "";
  document.getElementById("projetoModalTitulo").textContent = "Novo projeto";
  imagemAtual = null;
  previewImagem.classList.add("d-none");
  previewImagem.removeAttribute("src");
  projetoModal.show();
}

function abrirFormularioEdicao(id) {
  const p = projetos.find((proj) => proj.id === id);
  if (!p) return;
  document.getElementById("projeto-id").value = p.id;
  document.getElementById("projeto-titulo").value = p.titulo;
  document.getElementById("projeto-descricao").value = p.descricao;
  document.getElementById("projeto-tecnologias").value = (p.tecnologias || []).join(", ");
  document.getElementById("projeto-repositorio").value = p.repositorio || "";
  document.getElementById("projeto-demo").value = p.demo || "";
  document.getElementById("projetoModalTitulo").textContent = "Editar projeto";
  imagemAtual = p.imagem || null;
  if (imagemAtual) {
    previewImagem.src = imagemAtual;
    previewImagem.classList.remove("d-none");
  } else {
    previewImagem.classList.add("d-none");
    previewImagem.removeAttribute("src");
  }
  projetoModal.show();
}

document.getElementById("form-projeto").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("projeto-id").value;
  const dados = {
    titulo: document.getElementById("projeto-titulo").value.trim(),
    descricao: document.getElementById("projeto-descricao").value.trim(),
    tecnologias: document
      .getElementById("projeto-tecnologias")
      .value.split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    repositorio: document.getElementById("projeto-repositorio").value.trim(),
    demo: document.getElementById("projeto-demo").value.trim(),
    imagem: imagemAtual
  };

  if (id) {
    const indice = projetos.findIndex((p) => p.id === id);
    projetos[indice] = { ...projetos[indice], ...dados };
  } else {
    projetos.unshift({ id: Date.now().toString(), ...dados });
  }

  if (!salvarNoStorage()) return;
  projetoModal.hide();
  renderizarProjetos();
});

function excluirProjeto(id) {
  const p = projetos.find((proj) => proj.id === id);
  if (!p) return;
  if (!confirm(`Excluir o projeto "${p.titulo}"? Essa ação não pode ser desfeita.`)) return;
  projetos = projetos.filter((proj) => proj.id !== id);
  salvarNoStorage();
  renderizarProjetos();
}

const STORAGE_COMENTARIOS = "comentarios:v1";

const COMENTARIOS_PADRAO = [
  {
    id: "c1",
    nome: "Mariana Lopes",
    cargo: "Gerente de Projetos",
    texto:
      "Profissional dedicado e atento aos detalhes. Entregou nosso site dentro do prazo e com um acabamento excelente. Recomendo!",
    foto: null
  },
  {
    id: "c2",
    nome: "Graziela Souza",
    cargo: "Pesquisadora e Cientista Social",
    texto:
      "Desenvolveu meu portfólio profissional com muito cuidado e capricho. Comunicação clara e resultado acima do esperado.",
    foto: null
  }
];

function avatarIniciais(nome) {
  const inicial = (nome.trim().charAt(0) || "?").toUpperCase();
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">' +
    '<rect width="100%" height="100%" fill="#132de4"/>' +
    `<text x="50%" y="54%" fill="#ffffff" font-family="sans-serif" font-size="42" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${inicial}</text>` +
    "</svg>";
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function carregarComentarios() {
  const salvos = localStorage.getItem(STORAGE_COMENTARIOS);
  if (!salvos) {
    localStorage.setItem(STORAGE_COMENTARIOS, JSON.stringify(COMENTARIOS_PADRAO));
    return [...COMENTARIOS_PADRAO];
  }
  try {
    return JSON.parse(salvos);
  } catch {
    return [...COMENTARIOS_PADRAO];
  }
}

let comentarios = carregarComentarios();
let fotoComentarioAtual = null;

const listaComentariosEl = document.getElementById("lista-comentarios");
const comentarioModal = new bootstrap.Modal("#comentarioModal");

function salvarComentarios() {
  try {
    localStorage.setItem(STORAGE_COMENTARIOS, JSON.stringify(comentarios));
    return true;
  } catch {
    alert("Não foi possível salvar: a foto escolhida é grande demais para o armazenamento local.");
    return false;
  }
}

function renderizarComentarios() {
  listaComentariosEl.innerHTML = comentarios
    .map((c) => {
      const blocoResposta =
        c.resposta && c.resposta.texto
          ? `
        <div class="comment-reply mt-3">
          <small class="fw-bold text-accent"><i class="bi bi-reply-fill me-1"></i>João Vitor Souza <span class="badge badge-skill ms-1">Autor</span></small>
          <p class="mb-0 mt-1 small">${escaparHtml(c.resposta.texto)}</p>
        </div>`
          : "";
      const adminBotoes = logado
        ? `
        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-outline-primary btn-sm w-100" data-responder="${c.id}">
            <i class="bi bi-reply-fill me-1"></i>${c.resposta && c.resposta.texto ? "Editar resposta" : "Responder"}
          </button>
          <button class="btn btn-outline-dark btn-sm w-100" data-excluir-comentario="${c.id}">
            <i class="bi bi-trash3-fill me-1"></i>Excluir
          </button>
        </div>`
        : "";
      return `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column">
          <i class="bi bi-quote display-6 text-accent lh-1"></i>
          <p class="card-text mt-2">${escaparHtml(c.texto)}</p>
          <div class="d-flex align-items-center gap-3 mt-auto pt-3 border-top">
            <img src="${c.foto || avatarIniciais(c.nome)}" alt="Foto de ${escaparHtml(c.nome)}" class="comment-avatar rounded-circle" loading="lazy" decoding="async">
            <div>
              <h6 class="mb-0 fw-bold">${escaparHtml(c.nome)}</h6>
              <small class="text-muted">${escaparHtml(c.cargo)}</small>
            </div>
          </div>
          ${blocoResposta}
          ${adminBotoes}
        </div>
      </div>
    </div>`;
    })
    .join("");
}

const respostaModal = new bootstrap.Modal("#respostaModal");

listaComentariosEl.addEventListener("click", (e) => {
  const botaoResponder = e.target.closest("[data-responder]");
  const botaoExcluir = e.target.closest("[data-excluir-comentario]");
  if (botaoResponder) abrirResposta(botaoResponder.dataset.responder);
  if (botaoExcluir) excluirComentario(botaoExcluir.dataset.excluirComentario);
});

function abrirResposta(id) {
  const c = comentarios.find((com) => com.id === id);
  if (!c) return;
  document.getElementById("resposta-comentario-id").value = c.id;
  document.getElementById("resposta-texto").value = (c.resposta && c.resposta.texto) || "";
  respostaModal.show();
}

document.getElementById("form-resposta").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("resposta-comentario-id").value;
  const c = comentarios.find((com) => com.id === id);
  if (!c) return;
  c.resposta = { texto: document.getElementById("resposta-texto").value.trim() };
  if (!salvarComentarios()) return;
  respostaModal.hide();
  renderizarComentarios();
});

function excluirComentario(id) {
  const c = comentarios.find((com) => com.id === id);
  if (!c) return;
  if (!confirm(`Excluir o comentário de "${c.nome}"? Essa ação não pode ser desfeita.`)) return;
  comentarios = comentarios.filter((com) => com.id !== id);
  salvarComentarios();
  renderizarComentarios();
}

document.getElementById("btn-novo-comentario").addEventListener("click", () => {
  document.getElementById("form-comentario").reset();
  fotoComentarioAtual = null;
  comentarioModal.show();
});

document.getElementById("comentario-foto").addEventListener("change", (e) => {
  const arquivo = e.target.files[0];
  if (!arquivo) {
    fotoComentarioAtual = null;
    return;
  }
  const leitor = new FileReader();
  leitor.onload = () => {
    fotoComentarioAtual = leitor.result;
  };
  leitor.readAsDataURL(arquivo);
});

document.getElementById("form-comentario").addEventListener("submit", (e) => {
  e.preventDefault();
  comentarios.unshift({
    id: Date.now().toString(),
    nome: document.getElementById("comentario-nome").value.trim(),
    cargo: document.getElementById("comentario-cargo").value.trim(),
    texto: document.getElementById("comentario-texto").value.trim(),
    foto: fotoComentarioAtual
  });
  if (!salvarComentarios()) return;
  comentarioModal.hide();
  renderizarComentarios();
});

atualizarInterfaceAuth();
renderizarComentarios();
