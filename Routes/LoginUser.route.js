const express = require('express');
const router = express.Router();

const LoginUserController = require('../Controllers/LoginUser.controller');

router.post('/user', LoginUserController.login);


module.exports = router;