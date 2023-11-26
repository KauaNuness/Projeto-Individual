var database = require("../database/config");

function criarCosplan(nomeCosplan, versao, franquia, idUsuario){
    var instrucao1 = `
        insert into cosplan ( fkUsuario, nome, franquia, versao) values (${idUsuario} ,'${nomeCosplan}', '${franquia}', '${versao}');
    `;
    return database.executar(instrucao1);
}
function achaCosplan(idUsuario){
    if(idUsuario == undefined) return false;
    var instrucao2 = `
        select idProjeto from projeto where fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao2);
}

module.exports = {
    criarCosplan,
    achaCosplan
}