import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import photoController from '../controllers/PhotoController';

const photoRoutes = Router();

photoRoutes.post('/', loginRequired, photoController.store);

export default photoRoutes;
