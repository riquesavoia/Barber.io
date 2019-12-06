const express = require('express');
const router = express.Router();
const pool = require('../db');
const AgendamentoService = require('../services/agendamento');

router.get('/selectAll', (req, res, next) => {
    new AgendamentoService(pool)
    .selectAll()
    .then(agendamentos => res.json(agendamentos))
    .catch(next)
});

module.exports = router;