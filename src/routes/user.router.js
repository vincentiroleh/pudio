const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/user.controller');

router.post('/signup', userController.createUser);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: 'Invalid email or password',
}));

router.get('/logout', userController.logout);


module.exports = router;
