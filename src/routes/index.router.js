const express = require('express');

const router = express.Router();
const controller = require('../controllers/podcast.controller');

// get routes
router.get('/', controller.findPodcasts);
router.get('/login', controller.login);
router.get('/dashboard', controller.dashboard);

// post routes
router.post('/podcast/new', controller.createPodcast);


module.exports = router;
