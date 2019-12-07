const express = require('express');
const router = express.Router();
const pool = require('../db');
const ServicoService = require('../services/servico');
const AgendamentoService = require('../services/agendamento');
const PagamentoService = require('../services/pagamento');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  new ServicoService(pool)
  .selectAll()
  .then(listaServicos => {
    new PagamentoService(pool)
    .selectAll()
    .then(formasPagamentos => {
      res.render('signup', {servicos: listaServicos, formas_pagamento: formasPagamentos})
    })
  })
  .catch(next)
});

router.get('/agendamentos', function(req, res, next) {
  new AgendamentoService(pool)
  .selectAll()
  .then(listaAgendamentos => {
    res.render('agendamentos', {agendamentos: listaAgendamentos})
  })
  .catch(next)
});

router.get('/avaliacoes', function(req, res, next) {
  res.render('avaliacoes', { title: 'Express' });
});

router.get('/perfil', function(req, res, next) {
  new ServicoService(pool)
  .selectAll()
  .then(data => res.render('perfil', {servicos: data}))
  .catch(next)
});

module.exports = router;
