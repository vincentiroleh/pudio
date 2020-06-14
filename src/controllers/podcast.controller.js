const Podcasts = require('../models/podcast.model');

class podcastController {
  static createPodcast(req, res) {
    const newPodcast = {
      title: req.body.title,
      author: req.body.author,
      link: req.body.link,
    };

    Podcasts.create(newPodcast)
      .then(() => {
        console.log('Podcast created');
        res.redirect('/');
      })
      .catch((error) => console.log(error));
  }

  static findPodcasts(req, res) {
    Podcasts.find({})
      .then((podcasts) => {
        res.status(200).render('index', { podcasts });
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  }

  static login(req, res) {
    res.status(200).render('login');
  }

  static dashboard(req, res) {
    res.status(200).render('dashboard');
  }
}

module.exports = podcastController;
