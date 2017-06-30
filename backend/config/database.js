const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')


// Mensagem padrão de erro para todos os elementos do model que são obrigatório
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maoir que o limite máximo de '{MAX}'"
//mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."