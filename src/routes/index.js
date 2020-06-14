const express = require('express');

const router = express.Router();
const controller = require('../controllers/index');

router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/dashboard', controller.dashboard);

module.exports = router;
