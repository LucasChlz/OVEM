const express = require('express');
const router = express.Router();

const registerUser = require('../Controllers/RegisterUser.controller');

router.post('/user', registerUser.create);


module.exports = router;