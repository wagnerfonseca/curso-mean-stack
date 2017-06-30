const _ = require('lodash')
// Model de 'BillingCycle'
const BillingCycle = require('../billingCycle/billingCycle')

function getSummary(req, res) {
    BillingCycle.aggregate(
        {
            $project: {
                credit: {$sum: '$credits.value'}, 
                debt: {$sum: '$debts.value'} 
            }
        },
        {
            $group: { 
                _id: null,  
                credit: { $sum: '$credit' },
                debt: { $sum: '$debt' }
            }
        },
        {
            $project: {
                _id: 0,
                credit: 1,
                debt: 1
            }
        },       
        function(err, result) {
            // result é um array 
            if(err) 
                res.status(500).json({errors: [err]})
            else
                // caso o valor não exista ele retorna um obj com o valor padrão 
                res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }        
    )
}

module.exports = { getSummary }