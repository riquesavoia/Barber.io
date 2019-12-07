const express = require('express');
const router = express.Router();
const pool = require('../db');
const CategoriaService = require('../services/categoria');

router.get('/selectAll', (req, res, next) => {
    new CategoriaService(pool)
    .selectAll()
    .then(categorias => res.json(categorias))
    .catch(next)
});

module.exports = router;