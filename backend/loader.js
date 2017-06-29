
/**
 * para que a constante 'server' tenha algum valor, é necessário que dentro do arquiv 'config/server'
 * exporte a variavel 'server' (que possui configuracoes para iniciar o servidor), atraves do 'module.exports'
 */
const server = require('./config/server')
require('./config/database')

// passando parametro para a funcao
require('./config/routes')(server) 