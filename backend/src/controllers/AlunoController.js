import Aluno from '../models/Aluno';

class AlunoController {
  async index(request, response) {
    try {
      const alunos = await Aluno.findAll();
      response.json(alunos);
    } catch (e) {
      response.json(e);
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Id não informado' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado' });
      }

      response.json(aluno);
    } catch (e) {
      response.json(e);
    }
  }

  async store(request, response) {
    try {
      const {
        nome, sobrenome, email, idade, peso, altura,
      } = request.body;
      const aluno = await Aluno.create({
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
      });

      response.json(aluno);
    } catch (e) {
      response.status(400).json({
        message: e.errors.map((err) => err.message),
      });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Id não informado' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado' });
      }

      const updatedAluno = await aluno.update(request.body);
      response.json(updatedAluno);
    } catch (e) {
      response.json(e);
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: 'Id não informado' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        response.status(400).json({ message: 'Aluno não encontrado' });
      }

      await aluno.destroy();
      response.json({ message: 'Aluno  deletado ' });
    } catch (e) {
      response.json(e);
    }
  }
}

export default new AlunoController();
