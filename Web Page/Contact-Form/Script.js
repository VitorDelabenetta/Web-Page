// Recebimento dos dados
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validação dos dados do formulário
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Este campo não pode estar vazio";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Endereço de e-mail inválido";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1) {
        errorNodes[2].innerText = "Por favor, escreva-nos uma mensagem";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Enviado com sucesso!";
    }
}

// Limpar 'Error' / 'Success'
function clearMessages() {
    for(let i=0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border")
    email.classList.remove("error-border")
    message.classList.remove("error-border")
}

// Checar se o e-mail é válido
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}