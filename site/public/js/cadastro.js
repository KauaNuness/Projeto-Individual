function ButtonCadastrar() {
  // Recuperar valores dos campos de entrada
  var emailVar = input_email.value;
  console.log(emailVar);
  var nomeVar = input_nome.value;
  console.log(nomeVar);
  var senhaVar = input_senha.value;
  console.log(senhaVar);
  var repetirSenhaVar = input_repetir_senha.value;
  console.log(repetirSenhaVar);
  var personagemVar = select_personagem.value;
  console.log(personagemVar);

  // Verificar se algum campo está em branco
  if (
      emailVar == "" ||
      senhaVar == "" ||
      repetirSenhaVar == "" ||
      personagemVar == "" ||
      nomeVar == ""
  ) {
      alert("Mensagem de erro: Campos em branco");
      return false;
  } else {
      // A função setInterval não parece ter um propósito claro aqui.
      // Se não for necessário, você pode removê-la; entretanto pretendo colocar algo aqui dentro
      // setInterval(5000);
  }

  // Enviar dados para o servidor usando o método fetch
  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          nomeServer: nomeVar,
          emailServer: emailVar,
          senhaServer: senhaVar,
          repetirSenhaServer: repetirSenhaVar,
          personagemServer: personagemVar,
      }),
  })
      .then(function (resposta) {
          console.log("resposta: ", resposta);

          if (resposta.ok) {
              // Exibir mensagem de sucesso
              alert("Cadastro Realizado com sucesso");

              // Redirecionar para a página de login após um breve intervalo
              setTimeout(() => {
                  window.location.href = "login.html";
              }, 1000);
          } else {
              throw "Houve um erro ao tentar realizar o cadastro!";
          }
      })
      .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
      });

  return false; // Evitar o envio do formulário tradicional (se aplicável)
}
