var criarProjetoModel = require('../models/createCosplanModel');

function criarProjeto(req, res){
    var nomeCosplan = req.body.nomeCosplanSERVER;
    var franquia = req.body.franquiaCosplanSERVER;
    var versao = req.body.versaoCosplanSERVER;
    var idUser = req.params.idUsuario;

    criarProjetoModel.criarProjeto(nomeCosplan,  
        versao,
        franquia,        
        idUser
    )
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criar o projeto! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );

}

module.exports = { criarProjeto, criaAreaController }