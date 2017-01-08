var express = require('express');
var views = require('../config/front');
var router = express.Router();

var Quiz = require('../models/quiz');
var ItemQuiz = require('../models/item-quiz');
var RespostaQuiz = require('../models/resposta-quiz');

var quizRepository = require('../repository/quiz-repository');

router.post('/criar', function (req, res) {
    var q = new Quiz({
        nomeQuiz: 'Quiz da Jess',
        dataQuiz: Date.now.toString()
    });

    q.save(function (error) {
        console.log(error);
        if (error)
            res.sendStatus(500);

        for (var i = 0; i < req.body.itensQuiz.length; i++) {
            var itemQuiz = req.body.itensQuiz[i];

            var item = new ItemQuiz({
                pergunta: itemQuiz.pergunta,
                idQuiz: q._id,
                resposta: ''
            });

            item.save(function (error) {
                console.log(error);
                if (error)
                    res.sendStatus(500);
            });
        }
    });
    res.sendStatus(200);
});

router.get('/listar', function (req, res) {
    Quiz.find(function (error, quizes) {
        if (error)
            res.send(error);

        res.json(quizes);
    });
});

router.get('/quiz/:id', function (req, res) {
    var id = req.params.id;

    Quiz.findById(id, function (error, quiz) {
        if (error)
            res.json(error);

        var quizVM = {
            _id: id,
            itensQuiz: []
        };

        ItemQuiz.find({ idQuiz: id }, function (error, itens) {
            if (error)
                res.json(error);

            quizVM.itensQuiz = itens;

            res.json(quizVM);
        });
    });
});

router.post('/responder', function (req, res) {
    var respostas = req.body.respostas;

    respostas.forEach(function (element) {
        var r = new RespostaQuiz({
            idQuiz: element.idQuiz,
            idItemQuiz: element.idItemQuiz,
            resposta: element.resposta,
            identificacao: element.identificacao
        });

        r.save(function (error, lines) {
            if (error)
                res.send(error);
        });
    }, this);

    res.sendStatus(200);
});

router.get('/respostas', function (req, res) {
    RespostaQuiz.find(function (error, respostas) {
        if (error)
            res.send(error);

        res.json(respostas);
    });
});

router.get('/respostas/:id', function (req, res) {
    var id = decodeURIComponent(req.params.id);

    RespostaQuiz.find({ identificacao: id })
        .populate('idItemQuiz', 'pergunta')
        .exec(function (error, questionario) {
            if (error)
                res.send(error);

            res.json(questionario);
        });
});

router.get('/participantes/:id', function (req, res) {
    // nome, pergunta, resposta
    var id = req.params.id;

    RespostaQuiz.distinct('identificacao', { idQuiz: id }, function (error, participantes) {
        if (error)
            res.send(error);

        res.json(participantes);
    });
});

// testes 

router.get('/testePopulate', function (req, res) {
    RespostaQuiz
        .find({ identificacao: 'jess' })
        .populate('idItemQuiz')
        .exec(function (error, respostas) {
            if (error)
                res.send(error);

            res.json(respostas);
        });
});

router.get('/testeGroup', function (req, res) {
    var a = RespostaQuiz.aggregate([{
        '$group': {
            _id: {
                identificacao: '$identificacao',
                idItemQuiz: '$idItemQuiz',
                resposta: '$resposta',
                _id: '$_id'
            }
        }
    }], function (error, result) {
        console.log("eror: " + error);

        console.log("result:" + result);
    });
});

router.get('/deleteAll', function (req, res) {
    Quiz.remove({}, function () { });
    ItemQuiz.remove({}, function () { });

    res.send("deletou");
});

router.get('/deleteRespostas', function (req, res) {
    RespostaQuiz.remove({}, function () { });

    res.send("deletou");
});

module.exports = router;