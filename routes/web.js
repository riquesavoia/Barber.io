var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

module.exports = router;
