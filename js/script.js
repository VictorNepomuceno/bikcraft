// MENU ATIVO

const links = document.querySelectorAll(".header-menu a");

function menuAtivo(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(menuAtivo);

// LINKS ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function checked(params) {
  const element = document.getElementById(params);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(checked);

// PERGUNTAS FREQUENTES MOSTRAR

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPergunta);
