import { Router } from 'express';
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';
import alunoRoutes from './alunoRoutes';

const routes = Router();

routes.use('/', homeRoutes);
routes.use('/users', userRoutes);
routes.use('/tokens', tokenRoutes);
routes.use('/alunos', alunoRoutes);
export default routes;
