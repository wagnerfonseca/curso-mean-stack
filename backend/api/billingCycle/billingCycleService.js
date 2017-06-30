const BillingCycle = require('./billingCycle')

// o plugin 'node-restful' vai criar todos os métodos dentro do padrão RESTFul
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//no momento do update deve retorna o objeto com os novos dados atualizados
// runValidators: para executar as validações no momento do update também
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle