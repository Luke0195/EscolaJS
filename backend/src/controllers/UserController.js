import User from '../models/User';

class UserController {
  async index(request, response) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      response.json(users);
    } catch (e) {
      response.status(400).json(e);
    }
  }

  async store(request, response) {
    try {
      const { nome, email, password } = request.body;
      const user = await User.create({
        nome, email, password,
      });

      response.json(user);
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const findUser = await User.findByPk(id);
      if (!findUser) {
        response.json({ message: 'Não foi possivel encontrar o usuário com esse Id' });
      }
      response.json(findUser);
    } catch (e) {
      response.status(400).json(e);
    }
  }

  async update(request, response) {
    try {
      const findUser = await User.findByPk(request.userId);
      if (!findUser) {
        response.json({ message: 'Não foi possivel encontrar o usuário com esse Id' });
      }
      const updatedUser = await findUser.update(request.body);

      response.json(updatedUser);
    } catch (e) {
      response.status(400).json(e);
    }
  }

  async delete(request, response) {
    const findUser = await User.findByPk(request.userId);
    if (!findUser) {
      response.status(400).json({ message: 'Não foi possivel encontrar o usuário com esse id' });
    }
    await findUser.destroy();
    response.status(200).json({ message: 'Usuário excluido da aplicação' });
  }
}

export default new UserController();
