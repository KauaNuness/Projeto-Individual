  // Evento DOMContentLoaded garante que o código JavaScript só será executado após o carregamento do DOM
    const cosplanContainer = document.querySelector('.cosplan-container');
    const listaContainer = document.querySelector('.lista-container');
    const confirmButton = document.getElementById('confirm-button');
    const deleteButton = document.getElementById('delete-button');

   
    // Array para armazenar os cosplans
    const cosplans = [];

    // Adiciona um ouvinte de eventos ao botão de confirmação
    confirmButton.addEventListener('click', function () {
      // Obtém os valores dos campos de entrada
      const nome = document.getElementById('input_cosplan_nome').value;
      const franquia = document.getElementById('input_cosplan_franquia').value;
      const versao = document.getElementById('input_cosplan_versao').value;

      var nomeCos = input_cosplan_nome.value;
      var franqCos = input_cosplan_franquia.value;
      var versaoCos = input_cosplan_versao.value;
      console.log(nomeCos, franqCos, versaoCos)

    fetch(`/cosplan/criarCosplan/${sessionStorage.getItem('ID_USUARIO')}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nomeCosplanServer: nomeCos,
      franquiaServer: franqCos,
      versaoServer: versaoCos
    }),
})
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // Exibir mensagem de sucesso
          
        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });


      // Cria um objeto cosplan
      const cosplan = {
        nome: nome,
        franquia: franquia,
        versao: versao
      };

      // Adiciona o cosplan ao array
      cosplans.push(cosplan);

      // Atualiza a lista de cosplans
      updateCosplanList();

      // Limpa os campos de entrada
      clearInputFields();
    });

    // Adiciona um ouvinte de eventos ao botão de exclusão
    deleteButton.addEventListener('click', function () {
      // Remove o cosplan selecionado
      const selectedCosplanIndex = cosplans.findIndex(cosplan => cosplan.selected);
      if (selectedCosplanIndex !== -1) {
        cosplans.splice(selectedCosplanIndex, 1);
        // Atualiza a lista de cosplans
        updateCosplanList();
      }
    });

    // Função para atualizar a lista de cosplans no DOM
    function updateCosplanList() {
      listaContainer.innerHTML = ''; // Limpa a lista

      // Adiciona o título "Lista Cosplan"
      const h2Element = document.createElement('h2');
      h2Element.textContent = 'Lista Cosplan';
      listaContainer.appendChild(h2Element);

      // Adiciona cada cosplan à lista
      cosplans.forEach(function (cosplan, index) {
        const cosplanElement = document.createElement('div');
        cosplanElement.innerHTML = `<p>${index + 1}. ${cosplan.nome} - ${cosplan.franquia} - ${cosplan.versao}</p>`;

        // Adiciona um evento de clique para selecionar o cosplan
        cosplanElement.addEventListener('click', function () {
          cosplans.forEach(cp => (cp.selected = false));
          cosplan.selected = true;
          updateCosplanList();
        });

        // Adiciona o elemento à lista
        listaContainer.appendChild(cosplanElement);
      });

      // Adiciona o botão "Deletar Cosplan" após a lista
      listaContainer.appendChild(deleteButton);
    }

    // Função para limpar os campos de entrada
    function clearInputFields() {
      document.getElementById('input_cosplan_nome').value = '';
      document.getElementById('input_cosplan_franquia').value = '';
      document.getElementById('input_cosplan_versao').value = '';
    }
  ;

  
