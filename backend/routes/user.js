import express from 'express';

import { signIn, signUp, current } from '../controllers/user.js';

const userRouter = express.Router();

/* user sign-in*/
userRouter.post('/sign-in', signIn);

/* user sign-up*/
userRouter.post('/sign-up', signUp);

/* user current*/
userRouter.get('/current', current);


export {userRouter};