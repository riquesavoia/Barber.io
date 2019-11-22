const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'Express' });
});

router.get('/avaliacoes', function(req, res, next) {
  res.render('avaliacoes', { title: 'Express' });
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { title: 'Express' });
});

module.exports = router;
