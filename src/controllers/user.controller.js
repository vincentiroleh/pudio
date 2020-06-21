const passport = require('passport');
const User = require('../models/user.model');

class userController {
  static createUser(req, res) {
    const { username, password } = req.body;

    const userData = {
      username,
    };
    User.register(userData, password, (err) => {
      if (err) {
        req.flash('error_msg', 'A user with the given username is already registered');
        return res.redirect('/signup');
      }
      return passport.authenticate('local')(req, res, () => {
        req.flash('success_msg', 'Account created successfully you can now login');
        return res.redirect('/signup');
      });
    });
  }

  static logout(req, res) {
    req.logout();
    req.flash('success_msg', 'You have been logged out.');
    res.redirect('/login');
  }
}

module.exports = userController;
