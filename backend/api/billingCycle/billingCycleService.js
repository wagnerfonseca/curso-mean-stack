const BillingCycle = require('./billingCycle')
const _ = require('lodash')

// o plugin 'node-restful' vai criar todos os métodos dentro do padrão RESTFul
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//no momento do update deve retorna o objeto com os novos dados atualizados
// runValidators: para executar as validações no momento do update também
BillingCycle.updateOptions({new: true, runValidators: true})

// existe uma possibilidade de interceptar a requisicao antes ou depois 
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {    
    const bundle = res.locals.bundle // possui todos os dados da response, como erros e outros dados
    console.log(bundle)

    if (bundle.errors) {
        let errors = parserErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next() // passa para o proximo middleware
    }

}

// Esse funcao fica responsavel por converter o meu obejto de erros transformando em um objeto customizado
function parserErrors(nodeRestfulErrors) {
    const errors = []
    // ForIn(lodash) percorre um array de objetos literais
    _.forIn(nodeRestfulErrors, error => errors.push(error.message)) // 'error' é o meu objeto literal
    return errors
}

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