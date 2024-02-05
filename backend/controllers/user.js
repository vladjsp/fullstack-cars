import {prisma} from '../prisma/prisma-client.js'
import {ErrorMessage, HttpStatus} from '../enums/enums.js'

export const signIn = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(HttpStatus.BAD_REQUEST).json({message: ErrorMessage.NOT_FULL_CREDENTIALS})
    }

    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    });
};

export const signUp = (req, res, next) => {
    res.send('user SIGN-Up endpoint');
};

export const current = (req, res, next) => {
    res.send('user current endpoint');
}

