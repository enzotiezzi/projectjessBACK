var Resenha = require('../models/Resenha');

var resenhaRepository = {
    // retorna true se cadastrou
    criarResenha: function(resenha, callback){
        var r = new Resenha({
            titulo: resenha.titulo,
            conteudo: resenha.resenha,
            autor: resenha.autor,
            editora: resenha.editora,
            paginas: resenha.quantidadePaginas,
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
    }
}

module.exports = resenhaRepository;