class homeController {
  static home(req, res) {
    res.status(200).render('index');
  }

  static login(req, res) {
    res.status(200).render('login');
  }

  static dashboard(req, res) {
    res.status(200).render('dashboard');
  }
}

module.exports = homeController;
