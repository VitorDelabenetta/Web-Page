// Recebimento dos dados
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#message");
const sucesso = document.querySelector("#sucesso");
const erros = document.querySelectorAll(".incorreto");

// Validação dos dados do formulário
function validarFormulario() {

    limparMensagens();
    let errado = false;

    if(nome.value.length < 1) {
        erros[0].innerText = "Este campo não pode estar vazio";
        nome.classList.add("incorreto-borda");
        errado = true;
    }

    if(!validarEmail(email.value)) {
        erros[1].innerText = "Endereço de e-mail inválido";
        email.classList.add("incorreto-borda");
        errado = true;
    }

    if(mensagem.value.length < 1) {
        erros[2].innerText = "Por favor, escreva-nos uma mensagem";
        mensagem.classList.add("incorreto-borda");
        errado = true;
    }

    if(!errado) {
        sucesso.innerText = "Enviado com sucesso!";
    }
}

// Limpar 'Erros' / 'Sucesso'
function limparMensagens() {
    for(let i=0; i < erros.length; i++) {
        erros[i].innerText = "";
    }
    sucesso.innerText = "";
    nome.classList.remove("incorreto-borda")
    email.classList.remove("incorreto-borda")
    mensagem.classList.remove("incorreto-borda")
}

// Checar se o e-mail é válido
function validarEmail(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}