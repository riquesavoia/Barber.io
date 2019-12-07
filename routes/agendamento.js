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

router.post('/insert', (req, res, next) => {
    new AgendamentoService(pool)
    .insert(req.body)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

router.post('/updateStatus', (req, res, next) => {
    const idAgendamento = req.body.id_agendamento;
    const status = req.body.status;
    new AgendamentoService(pool)
    .updateStatus(idAgendamento, status)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

module.exports = router;