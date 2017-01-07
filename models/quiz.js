var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    nomeQuiz: String,
    dataQuiz: String
});

var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;