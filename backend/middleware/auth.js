import jwt from "jsonwebtoken";
import { prisma } from "../prisma/prisma-client.js";
import { HttpStatus } from "../enums/http-status.enum.js";
import { ErrorMessage } from "../enums/error-messages.enum.js";

export const auth = async (req, res, next) => {

    try {
        const {authorization} = req.headers;
        // Need to remove "Bearer " part from string
        const token = authorization?.slice(7);

        if(token){
            const decodedToken = jwt.decode(token);
            const userId = decodedToken.id;
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            });
            req.user = user;
            // res.status(200).json({message: user})
            next();
        }
    } catch (error) {
        return res.status(HttpStatus.UNAUTHORIZED).json({message: ErrorMessage.NOT_AUTHORIZED})
    }
}