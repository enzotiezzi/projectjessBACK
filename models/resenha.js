var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resenhaSchema = new Schema({
	titulo: String,
    resenha: String,
    autor: String,
    editora: String,
    quantidadePaginas: Number,
    linkImagem: String,
    nota: Number
}); 

var Resenha = mongoose.model('Resenha', resenhaSchema);

module.exports = Resenha;