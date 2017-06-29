const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')


// Mensagem padrão de erro para todos os elementos do model que são obrigatório
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"