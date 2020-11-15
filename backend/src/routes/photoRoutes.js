import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const photoRoutes = Router();

photoRoutes.post('/', photoController.store);

export default photoRoutes;
