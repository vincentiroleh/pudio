const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');

const routes = require('./src/routes/index.router');

const app = express();
require('dotenv').config();

// connect db
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, () => console.log('db connected successfully'));

// middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(routes);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
