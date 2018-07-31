var createError = require('http-errors');
var express = require('express');
const handlebars = require('handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var LocalStrategy = require('passport-local').Strategy;
const dotenv = require('dotenv');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://esviryggtkukib:29e1c9a47f95b2f297df95300c0fdc71754bcb6f380ade775791cc74c436d47f@ec2-174-129-247-1.compute-1.amazonaws.com:5432/dbb0e3u4uipnum');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const setupAuth = require('./auth');

dotenv.load();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

setupAuth(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
