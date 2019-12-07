const express = require('express');
const router = express.Router();
const pool = require('../db');
const AvaliacaoService = require('../services/avaliacao');

router.get('/selectAllByProfissional/:id', (req, res, next) => {
    new AvaliacaoService(pool)
    .selectAllByProfissional(req.params.id)
    .then(avaliacoes => res.json(avaliacoes))
    .catch(next)
});

module.exports = router;