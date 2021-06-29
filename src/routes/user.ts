/*
 * User Router
 */
import {Request, Response, Router} from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = Router();

/**
 * Route: /user
 */
userRouter.get('/', userController.getUser);

/**
 * Route: /user/add
 */
userRouter.get('/add', userController.getAdd);
userRouter.post('/add', userController.postAdd);

export default userRouter;
