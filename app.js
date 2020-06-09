const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const logger = require('morgan');
const routes = require('./src/routes/index');

const app = express();
require('dotenv').config();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(routes);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
