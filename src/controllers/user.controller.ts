/*
 * Login controller
 */
import * as logger from '../utils/logger';
import {Request, Response} from 'express';
import {messages} from '../constants';
import {getConnection, getCustomRepository, QueryRunner} from 'typeorm';
import {UserRepository} from '../repositories/user.repository';

/**
 * GET user
 */
export const getUser = async (req: Request, res: Response) => {
  try {
    const userRepository = getCustomRepository(UserRepository);
    console.table(await userRepository.getAll());
    res.render('user', {userData: await userRepository.getAll()});
  } catch {}
};

/**
 * GET addUser
 */
export const getAdd = async (req: Request, res: Response) => {
  res.render('addUser');
};

/**
 * POST addUser
 * TODO: change userData back to object type
 * TODO: add Transaction
 * TODO: add class-validator
 */
export const postAdd = async (req: Request, res: Response) => {
  const userData = req.body;
  const currentUser = req.user;
  const userRepository = getCustomRepository(UserRepository);
  if ((await userRepository.add(userData, currentUser)) == true) {
    const message = {
      message: {type: 'success', content: 'Succesfully registered!'}
    };
    res.render('addUser', message);
  } else {
    const message = {
      message: {type: 'error', content: 'Error occured! Try again!'}
    };
    res.render('addUser', message);
  }
  // res.redirect('back');
};
