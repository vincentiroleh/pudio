class homeController {
  static home(req, res) {
    res.status(200).render('index');
  }

  static login(req, res) {
    res.status(200).render('login');
  }
}

module.exports = homeController;
