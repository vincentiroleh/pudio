class homeController {
  static home(req, res) {
    res.status(200).render('index');
  }
}

module.exports = homeController;
