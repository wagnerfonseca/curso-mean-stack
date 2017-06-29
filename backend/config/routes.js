const express = require('express')

module.exports = function(server) {
    // definindo as rotas da API
    const router = express.Router()
    // todos as requisicoes que passarem pela recurso '/api'
    /**
     * ALL /api
     */
    server.use('/api', router)

    /**
     * Rotas da API
     */
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    // fazer um bind com arquivos de rotas com o nome do meu recurso
    billingCycleService.register(router, '/billingcycles')
    
}