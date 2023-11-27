var criarProjetoModel = require('../models/createCosplanModel');

function criarCosplan(req, res){
    var nomeCosplan = req.body.nomeCosplanSERVER;
    var franquia = req.body.franquiaCosplanSERVER;
    var versao = req.body.versaoCosplanSERVER;
    var idUser = req.params.idUsuario;

    criarProjetoModel.criarCosplan(nomeCosplan,  
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

module.exports = { criarCosplan }