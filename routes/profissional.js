const express = require('express');
const router = express.Router();
const pool = require('../db');
const connectionMiddleWare = require('../connection-middleware');
const ProfissionalService = require('../services/profissional');

router.use(connectionMiddleWare(pool));

router.get('/selectAll', (req, res, next) => {
    new ProfissionalService(req.connection)
    .selectAll()
    .then(profissionais => res.json(profissionais))
    .catch(next)
});

router.post('/insert', (req, res, next) => {
    new ProfissionalService(req.connection)
    .insert(req.body)
    .then(data => res.send(data))
    .catch(next)
});

module.exports = router;