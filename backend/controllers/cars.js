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

export const addNewCar = async (req, res) => {
    try {
        const { make, model, year, color, mileage, price } = req.body;
        const userId = req.user.id;

        if (!make || !model || !year || !color || !mileage || !price) {
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json({ message: ErrorMessage.NOT_FULL_CAR_INFO });
        }

        const newCar = await prisma.car.create({
            data: {
                make,
                model,
                year,
                color,
                mileage,
                price,
                userId,
            },
        });

        return res.status(HttpStatus.OK).json(newCar);
    } catch (error) {
        return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: ErrorMessage.GENERAL });
    }
};
