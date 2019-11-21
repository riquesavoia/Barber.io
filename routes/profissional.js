var express = require('express');
var router = express.Router();
var pool = require('../db');
var connectionMiddleWare = require('../connection-middleware');
var ProfissionalService = require('../services/profissional');

router.use(connectionMiddleWare(pool));

router.get('/selectAll/:id', function(req, res, next) {
    new ProfissionalService(req.connection)
    .selectAll()
    .then(profissionais => res.json(profissionais))
    .catch(next)
});

router.post('/insert', (req, res, next) => {
    new ProfissionalService(req.connection)
    .insert()
    .then(data => res.send(data))
    .catch(next)
})

// router.post('/signup')

module.exports = router;