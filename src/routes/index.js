// Index é responsável por carregar todas rotas da aplicação.
const express = require('express');

const registerController = require('./register');
const loginController = require('./login');

const router = express.Router();

router.use('/register', registerController);
router.use('/login', loginController);

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.post('/register', (req, res) => {
  res.render('register.ejs');
});

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.post('/login', (req, res) => {
  res.render('login.ejs');
});

router.get('/logged', (req, res) => {
  res.render('logged.ejs')
})
module.exports = router;
