const BillingCycle = require('/.billingCycle')

// o plugin 'node-restful' vai criar todos os métodos dentro do padrão RESTFul
BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle