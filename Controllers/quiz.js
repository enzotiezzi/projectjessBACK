var express = require('express');
var views = require('../config/front');
var router = express.Router();

var Quiz = require('../models/Quiz');
var ItemQuiz = require('../models/ItemQuiz');

router.post('/criar', function (req, res) {
    var q = new Quiz({
        nomeQuiz: 'Quiz da Jess',
        dataQuiz: Date.toString("dd/MM/yyyy HH:mm:ss")
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

            item.save(function(error){
                console.log(error);
                if(error)
                    res.sendStatus(500);
            });
        }
    });
    res.sendStatus(200);
});

router.get('/listar', function(req, res){
    Quiz.find(function(error, quizes){
        if(error)
            res.send(error);

        res.json(quizes);
    });
});

router.get('/quiz/:id', function(req, res){
    var id = req.params.id;

    Quiz.findById(id, function(error, quiz){
        if(error)
            res.json(error);

        var quizVM = {
            idQuiz: id,
            itensQuiz: []
        };

        ItemQuiz.find({ idQuiz: id }, function(error, itens){
            if(error)
                res.json(error);

            quizVM.itensQuiz = itens;

            res.json(quizVM);    
        });
    });
});

router.get('/deleteAll', function(req, res){
    Quiz.remove({}, function(){});
    ItemQuiz.remove({}, function(){});

    res.send("deletou");
});

module.exports = router;