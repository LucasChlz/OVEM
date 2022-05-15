const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/User.controller');

router.post('/create', UserController.create);
router.post('/login', UserController.login);


module.exports = router;