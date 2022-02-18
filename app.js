var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
module.exports = app;

const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());

const bookRouter = require('./routes/book');
app.use('/book', bookRouter);