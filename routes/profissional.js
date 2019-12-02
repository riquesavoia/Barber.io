const express = require('express');
const router = express.Router();
const pool = require('../db');
const ProfissionalService = require('../services/profissional');

router.get('/selectAll', (req, res, next) => {
    new ProfissionalService(pool)
    .selectAll()
    .then(profissionais => res.json(profissionais))
    .catch(next)
});

router.post('/insert', (req, res, next) => {
    console.log(req.body);
    new ProfissionalService(pool)
    .insert(req.body)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

router.post('/login', (req, res, next) => {
    new ProfissionalService(pool)
    .login(req.body)
    .then(data => res.status(201).send(data))
    .catch(next)
});

router.post('/update', (req, res, next) => {
    console.log(req.body);
    new ProfissionalService(pool)
    .update(req.body)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

router.post('/delete', (req, res, next) => {
    const idProfissional = req.body.id_profissional;
    new ProfissionalService(pool)
    .delete(idProfissional)
    .then(data => res.status(201).send({status: 'success'}))
    .catch(next)
});

module.exports = router;