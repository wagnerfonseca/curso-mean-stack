const BillingCycle = require('./billingCycle')

// o plugin 'node-restful' vai criar todos os métodos dentro do padrão RESTFul
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//no momento do update deve retorna o objeto com os novos dados atualizados
// runValidators: para executar as validações no momento do update também
BillingCycle.updateOptions({new: true, runValidators: true})

// criando mais um servico para o meu recurso 'billingcycles' 
BillingCycle.route('count', function(req, res, next) {
    // Recurso do mongoose para contar o numero total de registros
    BillingCycle.count(function(err, value) {
        if (err) {
            res.status(500).json({errors: [err]})
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle