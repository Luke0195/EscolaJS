import { Router } from 'express';
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';

const routes = Router();

routes.use('/alunos', homeRoutes);
routes.use('/users', userRoutes);
routes.use('/tokens', tokenRoutes);

export default routes;
