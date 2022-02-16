// Index é responsável por carregar todas rotas da aplicação.
const express = require('express');
const registerController = require('./register');

const router = express.Router();

router.use('/register', registerController);

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.post('/register', (req, res) => {
  res.render('register.ejs');
});

module.exports = router;
