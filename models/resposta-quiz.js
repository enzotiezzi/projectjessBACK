var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var respostaSchema = new Schema({
    idQuiz: Schema.Types.ObjectId,
    idItemQuiz: Schema.Types.ObjectId,
    resposta: String,
    identificacao: String
});

var RespostaQuiz = mongoose.model('RespostaQuiz', respostaSchema);

module.exports = RespostaQuiz;