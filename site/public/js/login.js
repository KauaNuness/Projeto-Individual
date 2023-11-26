function buttonEntrar() {
    // Obtém os valores dos campos de entrada
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    // Verifica se os campos estão em branco
    if (emailVar == "" || senhaVar == "") {
        alert("Mensagem de Erro: Campos em branco");
        return false;
    } else {
        // Inicia um intervalo de 5000 milissegundos (5 segundos)
        setInterval(5000);
    }

    // Exibe os valores dos campos no console (apenas para depuração)
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    // Realiza a solicitação de autenticação via fetch
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            // Se a resposta for bem-sucedida, exibe informações no console e redireciona para o painel do usuário
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                // Armazena algumas informações do usuário na sessionStorage
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ICONE_USUARIO = json.icone;
                sessionStorage.ID_USUARIO = json.idUsuario;

                // Aguarda um breve período (1 segundo) antes de redirecionar para exibir um possível "loading"
                setTimeout(function () {
                    window.location.href = "./dashboard/dashboard.html";
                }, 1000);
            });
        } else {
            alert("Mensagem de erro: Usuário ou senha incorretos")

            // Se houver um erro na resposta, exibe uma mensagem de erro no console
            console.log("Houve um erro ao tentar realizar o login!");

            // Obtém e exibe o texto da resposta
            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        // Se houver um erro na solicitação, exibe o erro no console
        console.log(erro);
    });

    return false; // Evita o envio padrão do formulário
}
