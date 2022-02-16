/*
 * O construtor irá garantir que toda a vez que alguém tentar criar uma instância do controller ele deve
 * passar o model User por parâmetro.
 */
const bcrypt = require('bcrypt');

class RegisterController {
  constructor(User) {
    this.User = User;
  }

  async create(req, res) {
    try {
      const user = new this.User(req.body);

      if (await this.User.findOne({ name: req.body.name }))
        return res
          .status(400)
          .send({ Message: 'Nome de usuário(a) já cadastrado.' });

      if (await this.User.findOne({ email: req.body.email }))
        return res.status(400).send({ Message: 'E-mail já cadastrado.' });

      user.password = await bcrypt.hash(user.password, 10);

      await user.save();

      user.password = undefined;

      return res.status(201).send({ user });
    } catch (err) {
      return res.send(err.message);
    }
  }
}

module.exports = RegisterController;
