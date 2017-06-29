const PORT = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server =  express()


/**
 * urlEnconded é o formado dos dados do formulario: extends :true é para ser capaz de interpretar mais dados
 * 
 * use = para todas a requição que chegar para o meu servidor vai passar pode esse middleware
 */
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(PORT, function() {
    console.log(`BACKEND is running on port ${PORT}.`)
})

// expondo a variavel server para que outros modulos (arquivos - lembrando que me NodeJs todo arquivo pode ser um modulo)
// possam exergar
module.exports = server