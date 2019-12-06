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

module.exports = router;