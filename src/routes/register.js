// Rota de recursos register
const express = require('express');
const User = require('../models/users');
const RegisterController = require('../controllers/registerController');

const router = express.Router(User);

const registerController = new RegisterController(User);

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.post('/register', (req, res) => registerController.create(req, res));

module.exports = router;
