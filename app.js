var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
const simulateRouter = require('./routes/simulate');

var app = express();

app.options('*', cors()) // include before other routes
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/simulate', simulateRouter);

module.exports = app;
