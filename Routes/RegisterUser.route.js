const express = require('express');
const router = express.Router();

const registerUser = require('../Controllers/RegisterUser.controller');

router.get('/', registerUser.Register);


module.exports = router;