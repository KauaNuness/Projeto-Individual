// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
<<<<<<< HEAD
    var icone = sessionStorage.NOME_USUARIO;
    
    var b_icone = document.getElementById("b_icone");
=======

>>>>>>> 19df5ffa49b430bbe9da3c73b0b4f7f206bdb35d
    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
<<<<<<< HEAD
        // b_icone.src = '';
=======
>>>>>>> 19df5ffa49b430bbe9da3c73b0b4f7f206bdb35d
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

