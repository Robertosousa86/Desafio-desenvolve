const bcrypt = require('bcrypt');

class LoginController {
  constructor(User) {
    this.User = User;
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await this.User.findOne({ email }).select('+password');
    console.log(user);
    if (!user) return res.status(400).send({ message: 'E-mail inválido.' });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ message: 'Ops... Senha incorreta!' });

    user.password = undefined;

    return res.redirect('/logged')
  }
}

module.exports = LoginController;
