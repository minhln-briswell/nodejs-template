/**
 * Login controller
 */
import * as logger from '../utils/logger';
import {Request, Response} from 'express';
import {messages} from '../constants';
import {getCustomRepository} from 'typeorm';
import {UserRepository} from '../repositories/user.repository';

/**
 * GET login
 */
export const login = (req: Request, res: Response) => {
  res.render('login/index', {
    layout: 'layout/loginLayout',
    message: '',
    name: ''
  });
};

/**
 * POST login
 */
export const auth = async (req: Request, res: Response) => {
  try {
    // get a User repository to perform operations with User
    const userRepository = getCustomRepository(UserRepository);

    // load a post by a given post id
    const user = await userRepository.verifyCredentials(
      req.body.name,
      req.body.password
    );

    if (!user) {
      // write log
      logger.logInfo(req, `Failed login attempt: name(${req.body.name || ''})`);

      res.render('login/index', {
        layout: 'layout/loginLayout',
        name: req.body.name,
        message: messages.ESV019
      });
    }

    // save user info into session
    (req.session as Express.Session).user = {
      ...user
    };

    // write log
    logger.logInfo(req, `User id(${user!.id}) logged in successfully.`);

    // If [ログイン] clicked, then redirect to U-TOP-01TOP page
    if (
      req.query.redirect !== undefined &&
      req.query.redirect.length > 0 &&
      req.query.redirect !== '/'
    ) {
      res.redirect(decodeURIComponent(req.query.redirect));
    } else {
      res.redirect('/');
    }
  } catch (err) {
    // write log
    logger.logInfo(req, `Failed login attempt: name(${req.body.name || ''})`);

    res.render('login/index', {
      layout: 'layout/loginLayout',
      name: req.body.name,
      message: messages.ESV019
    });
  }
};

/**
 * GET logout
 */
export const logout = async (req: Request, res: Response) => {
  req.user.destroy();

  // write log
  logger.logInfo(req, 'User logged out successfully.');

  let redirectURL = '/login';
  if (req.query.redirect !== undefined) {
    redirectURL += `?redirect=${encodeURIComponent(req.query.redirect)}`;
  }
  res.redirect(redirectURL);
};
