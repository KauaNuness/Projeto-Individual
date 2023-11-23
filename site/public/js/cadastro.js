function ButtonCadastrar(){

    var emailVar = input_email.value;
    console.log(emailVar)
    var nomeVar = input_nome.value;
    console.log(nomeVar)
    var senhaVar = input_senha.value;
    console.log(senhaVar)
    var repetirSenhaVar = input_repetir_senha.value;
    console.log(repetirSenhaVar)
    var personagemVar = select_personagem.value;
    console.log(personagemVar)

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    
    if (
      emailVar == "" ||
      senhaVar == "" ||
      repetirSenhaVar == "" ||
      personagemVar == "" ||
      nomeVar == ""
    ) {
 
      alert("Mensagem de erro: Campos em branco")

      return false;
    } else {
      setInterval( 5000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        repetirSenhaServer: repetirSenhaVar,
        personagemServer: personagemVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        //   cardErro.style.display = "block";

        //   mensagem_erro.innerHTML =
        //     "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
          alert("Cadastro Realizado com sucesso");

          setTimeout(() => {
            window.location.href = "login.html";
          }, "1000");

          
          
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
      });

    return false;
  }