import { Router } from 'express';
import homeRoutes from './homeRoutes';

const routes = Router();

routes.use('/alunos', homeRoutes);

export default routes;
