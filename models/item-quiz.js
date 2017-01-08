var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemQuizSchema = new Schema({
    pergunta: String,
    resposta: String,
    idQuiz: { type: Schema.Types.ObjectId, ref: 'Quiz' },
});

var ItemQuiz = mongoose.model('ItemQuiz', itemQuizSchema);

module.exports = ItemQuiz;