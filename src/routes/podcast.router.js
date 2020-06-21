const express = require('express');

const router = express.Router();
const controller = require('../controllers/podcast.controller');
const { isAuthUser, isAuthUserAndSignedIn, isAdmin } = require('../middleware/AuthUser');


// get routes
router.get('/', controller.findPodcasts);
router.get('/login', isAuthUserAndSignedIn, controller.login);
router.get('/signup', controller.signup);
router.get('/admin', isAuthUser, isAdmin, controller.admin);
router.get('/unauthorized', controller.unauthorized);

// post routes
router.post('/podcast/new', controller.createPodcast);


module.exports = router;
