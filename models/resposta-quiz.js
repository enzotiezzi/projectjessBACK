var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var respostaSchema = new Schema({
    idQuiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
    idItemQuiz: { type: Schema.Types.ObjectId, ref: 'ItemQuiz' },
    resposta: String,
    identificacao: String
});

var RespostaQuiz = mongoose.model('RespostaQuiz', respostaSchema);

module.exports = RespostaQuiz;