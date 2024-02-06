import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/prisma-client.js';
import { HttpStatus } from '../enums/http-status.enum.js';
import { ErrorMessage } from '../enums/error-messages.enum.js';

export const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        // Remove "Bearer " part from string or .split(' ')[1]
        const token = authorization?.slice(7);

        const decodedToken = jwt.decode(token);
        const userId = decodedToken.id;
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        req.user = user;
        next();
    } catch (error) {
        return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: ErrorMessage.NOT_AUTHORIZED });
    }
};
