var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resenhaSchema = new Schema({
	titulo: String,
    conteudo: String,
    autor: String,
    editora: String,
    paginas: Number,
    linkImagem: String,
    nota: Number
}); 

var Resenha = mongoose.model('Resenha', resenhaSchema);

module.exports = Resenha;