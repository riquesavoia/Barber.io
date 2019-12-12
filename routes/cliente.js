const express = require('express');
const router = express.Router();
const pool = require('../db');
const ClienteService = require('../services/cliente');

router.get('/selectAll', (req, res, next) => {
    new ClienteService(pool)
    .selectAll()
    .then(clientes => res.json(clientes))
    .catch(next)
});

router.post('/login', (req, res, next) => {
    new ClienteService(pool)
    .login(req.body)
    .then(data => res.status(200).send(data))
    .catch(next)
});

router.post('/insert', (req, res, next) => {
    new ClienteService(pool)
    .insert(req.body)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

module.exports = router;