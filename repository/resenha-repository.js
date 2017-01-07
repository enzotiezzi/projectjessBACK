var Resenha = require('../models/resenha');

var resenhaRepository = {
    // retorna true se cadastrou
    criarResenha: function(resenha, callback){
        var r = new Resenha({
            titulo: resenha.titulo,
            resenha: resenha.resenha,
            autor: resenha.autor,
            editora: resenha.editora,
            quantidadePaginas: resenha.quantidadePaginas,
            linkImagem: resenha.linkImagem,
            nota: resenha.nota
        });

        r.save(function(error, d, affected){
            console.log("erro: " + error);
            console.log("afetadas: " + affected);

            callback(error, d, affected);
        });
    },
    deletarTudo: function(callback){
        Resenha.remove({}, function(){
            callback();
        });
    },
    listarResenhas: function(callback){
        Resenha.find(function(error, resenhas){
            callback(error, resenhas);
        });
    },
    buscarResenha: function(idResenha, callback){
        Resenha.findOne({ _id: idResenha }, function(error, resenha){
            callback(error, resenha);
        });
    }
}

module.exports = resenhaRepository;