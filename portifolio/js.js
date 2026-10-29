
/* SAUDAÇÃO DINÂMICA */

const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
    saudacao.textContent = "Bom dia!";
} else if (hora < 18) {
    saudacao.textContent = "Boa tarde!";
} else {
    saudacao.textContent = "Boa noite!";
}

/* MENU HAMBÚRGUER */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu quando um link é selecionado.
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    });
});

/* MODO CLARO E ESCURO */

const temaToggle = document.querySelector(".tema-toggle");

temaToggle.addEventListener("click", function () {
    const escuro = document.documentElement.classList.toggle("escuro");

    temaToggle.setAttribute(
        "aria-label",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );

    temaToggle.setAttribute(
        "title",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );

    temaToggle.textContent = escuro ? "☀" : "◐";
});

/* ANO AUTOMÁTICO */

document.getElementById("ano").textContent =
    new Date().getFullYear();

/* VALIDAÇÃO DO FORMULÁRIO */

const formulario = document.getElementById("form-contato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const consentimento = document.getElementById("consentimento");

const statusForm = document.getElementById("status-form");

const campos = {
    nome: nome,
    email: email,
    mensagem: mensagem,
    consentimento: consentimento
};

const erros = {
    nome: document.getElementById("erro-nome"),
    email: document.getElementById("erro-email"),
    mensagem: document.getElementById("erro-mensagem"),
    consentimento: document.getElementById("erro-consentimento")
};

function mostrarErro(campo, texto) {
    erros[campo].textContent = texto;

    if (campo !== "consentimento") {
        campos[campo].setAttribute(
            "aria-invalid",
            texto ? "true" : "false"
        );
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    statusForm.textContent = "";

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const mensagemValor = mensagem.value.trim();

    const validacoes = {
        nome: nomeValor.length >= 2
            ? ""
            : "Digite seu nome com pelo menos 2 caracteres.",

        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor)
            ? ""
            : "Digite um endereço de e-mail válido.",

        mensagem: mensagemValor.length >= 10
            ? ""
            : "Escreva uma mensagem com pelo menos 10 caracteres.",

        consentimento: consentimento.checked
            ? ""
            : "É necessário aceitar o consentimento."
    };

    let formularioValido = true;
    let primeiroCampoComErro = null;

    Object.keys(validacoes).forEach(function (campo) {
        const erro = validacoes[campo];

        mostrarErro(campo, erro);

        if (erro) {
            formularioValido = false;

            if (!primeiroCampoComErro) {
                primeiroCampoComErro = campos[campo];
            }
        }
    });

    if (!formularioValido) {
        statusForm.textContent =
            "Confira os campos destacados e tente novamente.";

        primeiroCampoComErro.focus();
        return;
    }

    statusForm.textContent =
        "Formulário validado com sucesso! " +
        "Este modelo não envia mensagens. " +
        "É necessário conectar um serviço para receber os contatos.";

    formulario.reset();

    Object.keys(erros).forEach(function (campo) {
        mostrarErro(campo, "");
    });
});
