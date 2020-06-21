function isAuthUser(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
}

function isAuthUserAndSignedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/admin');
  } return next();
}

function isAdmin(req, res, next) {
  if (req.user.role === 'Admin') {
    return next();
  }
  return res.status(403).redirect('/');
}

module.exports = {
  isAuthUser,
  isAuthUserAndSignedIn,
  isAdmin,
};
