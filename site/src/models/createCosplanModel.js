var database = require("../database/config");

function criarCosplan(nomeCosplan, versao, franquia, idUsuario){
    var instrucao1 = `
        insert into cosplan ( fkUsuario, nome, franquia, versao) values (${idUsuario} ,'${nomeCosplan}', '${franquia}', '${versao}');
    `;
    return database.executar(instrucao1);
}
function listaCosplan(idUsuario){
    console.log(idUsuario)
    if(idUsuario == undefined) return false;
    var instrucao2 = `
    SELECT idCosplan ,nome, franquia, versao FROM cosplan WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao2);
}


module.exports = {
    criarCosplan,
    listaCosplan
}