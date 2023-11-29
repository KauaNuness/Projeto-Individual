var criarProjetoModel = require('../models/createCosplanModel');

function criarCosplan(req, res){
    var nomeCosplan = req.body.nomeCosplanServer;
    var franquia = req.body.franquiaServer;
    var versao = req.body.versaoServer;
    var idUser = req.params.idUsuario;

    console.log('Controller',nomeCosplan, franquia, versao, idUser)

    criarProjetoModel.criarCosplan(nomeCosplan, versao, franquia, idUser)
    .then(
        function (resultado) {
            console.log(resultado)
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

function listaCosplan(req, res){
    var idUser = req.params.idUsuario; 


        criarProjetoModel.listaCosplan(idUser)
            .then(
                function (resultadolistaCosplan){
                    console.log(`Resultados: ${JSON.stringify(resultadolistaCosplan)}`);
    
                    if (resultadolistaCosplan.length > 0) {
                        console.log(resultadolistaCosplan);
                        res.status(200).json(resultadolistaCosplan);
                        
                    } else {
                        res.status(404).send("A lista está vazia");
                    }
    
                }
            )

}

module.exports = { 
criarCosplan,
listaCosplan }