/*
 * Main Router
 */
import {Request, Response, Router} from 'express';
import {notFound as notFoundHandler} from '../controllers/error.controller';
import auth from '../middlewares/authentication';
import sessionMiddleWare from '../middlewares/session';
import userMiddleware from '../middlewares/user';
import authRouter from './auth';
import userRouter from './user';
import viewHelper from '../middlewares/viewHelper';

const router = Router();

router.use(sessionMiddleWare);
router.use(userMiddleware);
router.use('/', authRouter);
router.use('/user', userRouter);
router.use(auth);
router.use(viewHelper);

router.get('/', (req: Request, res: Response) => {
  // Type is one of 'error', 'info', and 'success'
  const data = {message: {type: 'success', content: 'TEST'}};
  res.render('index', data);
});

// 404 error
router.use(notFoundHandler);

export default router;
