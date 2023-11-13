var eventosContainer = document.querySelector("#eventos-container");

document.addEventListener("DOMContentLoaded", function () {
    // Suponha que você tenha um array de eventos cosplay
    var eventosCosplay = [
        {
            nome: "Up!ABC",
            localizacao: "Universidade USCS, São Caetano-SP",
            dia: "18-12-2023 e 19-12-2023",
            horario: "10:00 as 19:00"
        },
        {
            nome: "Heromix",
            localizacao: "Esporte Clube Santo André, Santo André-SP",
            dia: "22-01-2024 e 23-01-2024",
            horario: "10:00 as 20:00"
        },
        {
            nome: "BGS",
            localizacao: "Expor Center Norte, São Paulo-SP",
            dia: "10-10-2024 até 15-10-2024",
            horario: "12:00 as 21:00"
        },
        
        // Adicione mais eventos conforme necessário
    ];

    // Itera sobre os eventos e cria elementos HTML para exibição
    eventosCosplay.forEach(function (evento) {
        var eventoHTML = `
            <div class="evento">
                <h2>${evento.nome}</h2>
                <p>Local: ${evento.localizacao}</p>
                <p>Data: ${evento.dia}, Horário: ${evento.horario}</p>
            </div>
        `;

        eventosContainer.innerHTML += eventoHTML;
    });
});
