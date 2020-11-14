import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const tokenRoutes = Router();

tokenRoutes.post('/', tokenController.store);

export default tokenRoutes;
