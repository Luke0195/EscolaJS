import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const userRoutes = Router();

userRoutes.get('/', loginRequired, userController.index);
userRoutes.get('/:id', userController.show);
userRoutes.post('/', userController.store);
userRoutes.put('/:id', userController.update);
userRoutes.delete('/:id', userController.delete);

export default userRoutes;
