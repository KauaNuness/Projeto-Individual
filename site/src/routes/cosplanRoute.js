var express = require("express");
var router = express.Router();

var controllerCreateCosplan= require('../controllers/createCosplanController.js');

router.get('/criarCosplan', function(req, res){
    res.render('dashboard/createCosplan')
});

router.post('/criarCosplan/:idUsuario', function(req, res){
    controllerCreateCosplan.criarCosplan(req, res);

});

router.get('/listaCosplan/:idUsuario', function(req, res){
    controllerCreateCosplan.listaCosplan(req, res);

});

module.exports = router;