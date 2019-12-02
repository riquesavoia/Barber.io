const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const webRouter = require('./routes/web');
const agendamentoRouter = require('./routes/agendamento');
const avaliacaoRouter = require('./routes/avaliacao');
const clienteRouter = require('./routes/cliente');
const profissionalRouter = require('./routes/profissional');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setup
app.use('/', webRouter);
app.use('/api/agendamento', agendamentoRouter);
app.use('/api/avaliacao', avaliacaoRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/profissional', profissionalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // console.error(err.stack);
	res.status(500).json({ error: err.toString() });
});

module.exports = app;
