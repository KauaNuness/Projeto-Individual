var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucao = `
        SELECT  u.idUsuario, u.nome, u.email, u.senha, u.fkPersonagemFav, p.icone FROM usuario AS u JOIN personagemFav AS p ON u.fkPersonagemFav = p.idPersonagem
         WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, personagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fkPersonagemFav) VALUES ('${nome}', '${email}', '${senha}', '${personagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function grafico(){
    var instrucao = `
    SELECT COUNT(u.fkPersonagemFav) AS count, p.nome FROM Usuario AS u JOIN personagemFav AS p ON u.fkPersonagemFav = p.idPersonagem GROUP BY p.nome;
    `;

    return database.executar(instrucao);

}

module.exports = {
    autenticar,
    cadastrar,
    grafico
};