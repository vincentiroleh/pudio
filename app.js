const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./src/models/user.model');

const podcastRoutes = require('./src/routes/podcast.router');
const userRoutes = require('./src/routes/user.router');

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
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'username' }, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Middleware for flash messages
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash(('success_msg'));
  res.locals.error_msg = req.flash(('error_msg'));
  res.locals.error = req.flash(('error'));
  res.locals.currentUser = req.user;
  next();
});

app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(cors());
app.use(podcastRoutes);
app.use(userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
