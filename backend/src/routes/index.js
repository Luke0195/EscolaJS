import { Router } from 'express';
import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/alunos', homeRoutes);
routes.use('/users', userRoutes);

export default routes;
