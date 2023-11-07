var questions = [
    {
        question: "O que é cosplay?",
        options: ["Uma peça de teatro", "Uma forma de dança tradicional japonesa", "Um hobby que envolve vestir-se como personagens fictícios"],
        correctAnswer: 2,
    },
    {
        question: "Qual é o principal objetivo do cosplay?",
        options: ["Ganhar prêmios e dinheiro", "Se tornar famoso nas redes sociais", "Expressar paixão por personagens fictícios"],
        correctAnswer: 2,
    },
    {
        question: "O que significa o termo cosplayer?",
        options: ["Um personagem fictício de um jogo de RPG", "Uma pessoa que pratica o cosplay", "Um fotógrafo especializado em eventos de cosplay"],
        correctAnswer: 1,
    },
    {
        question: "Quem é considerado um dos ícones do mundo do cosplay?",
        options: ["Samui San", "Bill Gates", "Leonardo da Vinci"],
        correctAnswer: 0,
    },
    {
        question: "Qual é um dos materiais mais comuns para criar adereços e figurinos de cosplay?",
        options: ["Papelão", "Plástico bolha", "Papel de seda"],
        correctAnswer: 2,
    },
    {
        question: "O que é um crossplay no mundo do cosplay?",
        options: ["Cosplay de um personagem do sexo oposto", "Cosplay de um personagem de um universo cruzado", "Cosplay de um personagem com uma cruz no figurino"],
        correctAnswer: 1,
    },
    {
        question: "O que é cosmaker no mundo do cosplay?",
        options: ["Um aplicativo de redes sociais para cosplayers", "Um profissional que cria figurinos e adereços de cosplay", "Um concurso de cosplay online"],
        correctAnswer: 1,
    },
    {
        question: "O que é casual cosplay?",
        options: ["Cosplay feito apenas com roupas do dia a dia", "Uma forma de cosplay realizado em trajes formais", "Um estilo de cosplay voltado para casais"],
        correctAnswer: 0,
    },
    {
        question: "O que é um cosplay group?",
        options: ["Um grupo de pessoas que fazem cosplay de personagens do mesmo universo", "Um fórum online para cosplayers", "Um conjunto de acessórios de cosplay vendido em pacotes"],
        correctAnswer: 0,
    },
    {
        question: "O que significa prop em cosplay?",
        options: ["Um termo para desfiles de cosplay", "Um prêmio para o melhor cosplayer do ano", "Um objeto ou acessório feito à mão ou comprado para representar itens dos personagens"],
        correctAnswer: 2,
    },
];

var currentQuestion = 0; // Inici uma variável que rastreia a pergunta atual
var score = 0; // Inicia uma variável para rastrear a pontuação do jogador

function displayQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");

  // Atualiza o texto da pergunta na página
  questionElement.textContent = "Questão " + (currentQuestion + 1) + ": " + questions[currentQuestion].question;

  optionsElement.innerHTML = ""; // Limpa as opções anteriores

  // Cria opções de resposta com botões de seleção exclusiva para a pergunta atual
  for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    var label = document.createElement("label");
    var input = document.createElement("input");

    input.type = "radio"; // Define o tipo como "radio" (botão de rádio)
    input.name = "answer"; // Define o mesmo nome para todos os botões de rádio para garantir a seleção única
    input.value = String.fromCharCode(97 + i); // ?

    label.appendChild(input);
    label.appendChild(document.createTextNode(questions[currentQuestion].options[i]));

    optionsElement.appendChild(label);
  }
}

function nextQuestion() {
  var selectedAnswer = document.querySelector('input[name="answer"]:checked'); // Obtém a resposta selecionada

  if (selectedAnswer) {
    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
      score++; // Incrementa a pontuação se a resposta estiver correta
    }

    currentQuestion++; // Avança para a próxima pergunta

    if (currentQuestion < questions.length) {
      displayQuestion(); // Exibe a próxima pergunta se houver mais
    } else {
      var resultElement = document.getElementById("result");
      resultElement.textContent = "Você acertou " + score + " de " + questions.length + " questões.";
      // Exibe a pontuação final após responder todas as perguntas
    }
  }
}

displayQuestion(); // Exibe a primeira pergunta quando a página é carregada