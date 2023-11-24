fetch("/usuarios/grafico", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },

}).then(function (resposta) {

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            const ctx = document.getElementById('myChart');

            var labelctx = json.map(function(item){
                return item.nome

            });

            var datasetsctx = json.map(function(item){
                return item.count

            });

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labelctx,
                    datasets: [{
                        label: '# of Votes',
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

            var datasetsctx2 = json.map(function (item) {
                return {
                    label: item.nome,
                    data: [item.count],
                    borderWidth: 1
                }
            })

            const ctx2 = document.getElementById('myChart2');
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['Mais Escolhidos como Personagens Favoritos'],
                    datasets: datasetsctx2

                },

                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });


        });

    } else {

        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
            console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})
