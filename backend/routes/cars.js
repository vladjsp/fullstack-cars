import express from 'express';
import { auth } from '../middleware/auth.js';
import { getAllCars, getCarById } from '../controllers/cars.js';

const carsRouter = express.Router();

// /api/cars/
carsRouter.get('/', auth, getAllCars);

// /api/cars/:id
carsRouter.get('/:id', auth, getCarById);

// /api/cars/create
carsRouter.post('/create', auth, () => console.log('POST new car'));

// /api/cars/delete/:id
carsRouter.delete('/delete/:id', auth, () => console.log('DELETE a car'));

// /api/cars/delete/:id
carsRouter.patch('/edit/:id', auth, () => console.log('PATCH car info'));

export { carsRouter };
