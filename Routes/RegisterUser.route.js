const express = require('express');
const router = express.Router();

const registerUser = require('../Controllers/RegisterUser.controller');

router.post('/', registerUser.Register);


module.exports = router;