import { Router } from 'express';
import homeController from '../controllers/HomeController';

const homeRoutes = Router();

homeRoutes.get('/', homeController.index);
homeRoutes.post('/', homeController.store);

export default homeRoutes;
