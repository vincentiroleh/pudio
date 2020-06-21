const express = require('express');

const router = express.Router();
const controller = require('../controllers/podcast.controller');
const { isAuthUser, isAuthUserAndSignedIn, isAdmin } = require('../middleware/AuthUser');


// get routes
router.get('/', controller.findPodcasts);
router.get('/podcast/:id', controller.getPodcast);
router.get('/login', isAuthUserAndSignedIn, controller.login);
router.get('/signup', controller.signup);
router.get('/admin', isAuthUser, isAdmin, controller.admin);

// post routes
router.post('/podcast/new', controller.createPodcast);


module.exports = router;
