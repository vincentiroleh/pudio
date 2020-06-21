const Podcasts = require('../models/podcast.model');

class podcastController {
  static createPodcast(req, res) {
    const newPodcast = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
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

  static getPodcast(req, res) {
    const searchQuery = { _id: req.params.id };
    Podcasts.findOne(searchQuery)
      .then((podcast) => {
        res.render('podcast', { podcast });
      }).catch((err) => {
        req.flash('error_msg', err, 'Podcast not found');
      });
  }

  static login(req, res) {
    res.status(200).render('login');
  }

  static signup(req, res) {
    res.status(200).render('signup');
  }

  static admin(req, res) {
    res.status(200).render('admin');
  }
}

module.exports = podcastController;
