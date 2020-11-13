import { Router } from 'express';
import homeController from '../controllers/HomeController';

const homeRoutes = Router();

homeRoutes.get('/', homeController.index);

export default homeRoutes;
