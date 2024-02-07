import { ErrorMessage } from '../enums/enums.js';
import { HttpStatus } from '../enums/enums.js';
import { prisma } from '../prisma/prisma-client.js';

export const getAllCars = async (req, res, next) => {
    try {
        const cars = await prisma.car.findMany();

        return res.status(HttpStatus.OK).json(cars);
    } catch (error) {
        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: ErrorMessage.CARS_NOT_FOUND });
    }
};

export const getCarById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const car = await prisma.car.findUnique({
            where: { id: id },
        });

        return res.status(HttpStatus.OK).json(car);
    } catch (error) {
        return res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: ErrorMessage.CARS_NOT_FOUND });
    }
};

export const createNewCar = async () => {};
