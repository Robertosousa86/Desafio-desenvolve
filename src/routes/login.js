// Rota de recursos register
const express = require('express');
const User = require('../models/users');
const LoginController = require('../controllers/loginController');

const router = express.Router(User);

const loginController = new LoginController(User);

router.post('/', (req, res) => loginController.login(req, res));

module.exports = router;
