import { Router } from 'express';
import homeRoutes from './homeRoutes';

const routes = Router();

routes.use('/home', homeRoutes);

export default routes;
