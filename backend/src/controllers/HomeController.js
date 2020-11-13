import Aluno from '../models/Aluno';

class HomeController {
  index(request, response) {
    return response.json({ message: 'Bem Vindo ao projeto Escola' });
  }

  async store(request, response) {
    try {
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = request.body;

      const aluno = await Aluno.create({
        nome, sobrenome, email, idade, peso, altura,
      });

      return response.json(aluno);
    } catch (e) {
      return response.status(400).json(e);
    }
  }
}

export default new HomeController();
