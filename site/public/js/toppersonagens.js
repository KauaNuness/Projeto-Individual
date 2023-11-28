function geraGrafico(resposta){
    var lista1 = [];
    var lista2 = [];

    for(var i = 0; i < resposta.length; i++){
        lista1.push(resposta[i].nome);
        lista2.push(resposta[i].count);
    }
    const ctx2 = document.getElementById('myChart2');

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: lista1,
        datasets: [{
          label: '# of Votes',
          data: lista2,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}

// Fazendo uma solicitação GET para "/usuarios/grafico"
fetch("/usuarios/grafico", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    // Manipulando a resposta da solicitação
    .then(function (resposta) {
        // Verificar se a resposta foi bem-sucedida
        if (resposta.ok) {
            console.log(resposta);

            // Convertendo a resposta para JSON
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                geraGrafico(json)

                // Configurando o primeiro gráfico de rosquinha (doughnut)
                const ctx = document.getElementById('myChart');
                var labelctx = json.map(function (item) {
                    return item.nome;
                });

                // é uma função de array em JavaScript que cria um novo array com os resultados//
                // de chamar uma função fornecida para cada elemento no array original//
                
                // neste caso, json é um array de objetos. A função passada para map extrai a propriedade nome de cada objeto no array,//
                // criando um novo array contendo apenas os valores da propriedade nome.//

                // optei por usar o método map em vez de um loop for para transformar elementos do array de forma mais concisa, //
                // expressiva e funcional, promovendo uma leitura simplificada e favorecendo a imutabilidade do array original.//

                var datasetsctx = json.map(function (item) {
                    return item.count;
                });

                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labelctx,
                        datasets: [{
                            label: 'Mais Escolhidos como Personagens Favoritos',
                            data: datasetsctx,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                // Configurando o segundo gráfico de barras (bar)

                
            });

        } else {
            // Tratar erros se a resposta não for bem-sucedida
            console.log("Houve um erro ao tentar realizar a solicitação!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    })
    // Tratar erros durante a solicitação ou processamento
    .catch(function (erro) {
        console.log(erro);
    });
