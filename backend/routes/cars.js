import express from 'express';
import { auth } from '../middleware/auth.js';
import {
    addNewCar,
    deleteCarById,
    editCarData,
    getAllCars,
    getCarById,
} from '../controllers/cars.js';

const carsRouter = express.Router();

// /api/cars/
carsRouter.get('/', auth, getAllCars);

// /api/cars/:id
carsRouter.get('/:id', auth, getCarById);

// /api/cars/create
carsRouter.post('/create', auth, addNewCar);

// /api/cars/delete/:id
carsRouter.delete('/delete/:id', auth, deleteCarById);

// /api/cars/edit/:id
carsRouter.patch('/edit/:id', auth, editCarData);

export { carsRouter };
