import { Router } from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multercConfig';

const uploads = multer(multerConfig);

const photoRoutes = Router();

photoRoutes.post('/', uploads.single('photo'), photoController.store);

export default photoRoutes;
