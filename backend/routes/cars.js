import express from 'express';

const carsRouter = express.Router();

/* GET cars listing. */
carsRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export {carsRouter};
