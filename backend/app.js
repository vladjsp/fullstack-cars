import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

import {HttpStatus} from './enums/enums.js'

import {userRouter} from './routes/user.js';
import {carsRouter} from './routes/cars.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/api/cars', carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(HttpStatus.NOT_FOUND));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    error: {
      message: err.message,
      stack: req.app.get('env') === 'development' ? err.stack : ''
    }
  });
});

export default app;