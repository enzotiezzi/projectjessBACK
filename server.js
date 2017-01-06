// dependencias
var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var path = require('path');
var cors = require('cors');
var app = express();

// load de configuracoes
var url = require('./config/server');
var db = require('./config/db');

// load de rotas
var home = require('./Controllers/home');
var teste = require('./Controllers/teste');
var resenhaController = require('./Controllers/resenha');
var quizController = require('./Controllers/quiz');

// load de seeds
var seed_atributos = require('./seeds/seedAtributos');

// usa configuracoes
app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: false} ));
app.use(cookie_parser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

// CORS
app.use(cors());

// usa rotas
app.use('/teste', teste);
app.use('/apis/resenha', resenhaController);
app.use('/apis/quiz', quizController);

app.get('/*', function(req, res) { 
  res.sendFile(__dirname + '/public/index.html')
});

// usa configuracoes
mongoose.connect(db.url);

// seeds
seed_atributos();

// starta servdidor
app.listen(url.port, url.ip, function(){
    console.log('Ouvindo em: %s porta %s', url.ip, url.port);
});

