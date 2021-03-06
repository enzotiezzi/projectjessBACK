var express = require('express');
var router = express.Router();
var resenhaRepository = require('../repository/resenha-repository');

router.post('/criar', function (req, res) {
    console.log(req.body);
    resenhaRepository.criarResenha(req.body, function (error, d, affected) {
        if (affected == 1)
            res.sendStatus(200);
        else
            res.sendStatus(500);
    });
});

router.get('/deletaTudo', function (req, res) {
    resenhaRepository.deletarTudo(function () {
        res.send('deletou');
    });
});

router.get('/listar', function (req, res) {
    resenhaRepository.listarResenhas(function (error, resenhas) {
        if(error)
            res.send(error);

        res.json(resenhas);
    });
});

router.get('/resenha/:id', function(req, res){
    resenhaRepository.buscarResenha(req.params.id, function(error, resenha){
        if(error)
            res.send(error);

        res.json(resenha);
    });
});

module.exports = router;