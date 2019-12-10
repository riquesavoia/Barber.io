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
    .then(data => res.status(201).send(data))
    .catch(next)
});

module.exports = router;