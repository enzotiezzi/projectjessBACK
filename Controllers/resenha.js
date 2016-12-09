var express = require('express');
var views = require('../config/front');
var fs = require('fs');
var router = express.Router();
var Resenha = require('../models/Resenha');

router.get('/create/:code', function (req, res){
    if (req.params.code)
    {
        if(req.params.code == 'jessT')
        {
            // TODO: RETORNAR HTML DE CRIAÇÃO DE RESENHA
            res.send('Código correto');
        }
        else
        {
            res.send('Acesso negado');
        }
    }
    else
    {
        res.send('Acesso negado');
    }
});

module.exports = router;