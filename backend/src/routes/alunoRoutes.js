import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const alunosRoutes = Router();

alunosRoutes.get('/', alunoController.index);
alunosRoutes.get('/:id', alunoController.show);
alunosRoutes.post('/', loginRequired, alunoController.store);
alunosRoutes.put('/:id', loginRequired, alunoController.update);
alunosRoutes.delete('/:id', loginRequired, alunoController.delete);

export default alunosRoutes;
