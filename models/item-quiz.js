var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemQuizSchema = new Schema({
    pergunta: String,
    resposta: String,
    idQuiz: Schema.Types.ObjectId,
});

var ItemQuiz = mongoose.model('ItemQuiz', itemQuizSchema);

module.exports = ItemQuiz;