import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {prisma} from '../prisma/prisma-client.js'
import {ErrorMessage, HttpStatus} from '../enums/enums.js'

const jwtSecret = process.env.JWT_SECRET;

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

    const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));

    if(user && isPasswordCorrect){
        return res.status(HttpStatus.OK).json({
            id: user.id,
            email:user.email,
            name:user.name,
            token: jwt.sign({id: user.id}, jwtSecret, {expiresIn:"1d"})
        });
    } else {
        return res.status(HttpStatus.BAD_REQUEST).json({message: ErrorMessage.NOT_VALID_CREDENTIALS})
    }
};

/*
*
* @route POST api/user/sign-up
* @desc User sign-up
* @access public
*/
export const signUp = async (req, res, next) => {
    const {email, password, name} = req.body;

    if(!email || !password || !name) {
        return res.status(HttpStatus.BAD_REQUEST).json({message: ErrorMessage.NOT_FULL_CREDENTIALS});
    }

    const isEmailAlreadyExist = await prisma.user.findUnique({
        where: {email:email}
    })

    if(Boolean(isEmailAlreadyExist)) {
        return res.status(HttpStatus.BAD_REQUEST).json({message:ErrorMessage.USER_ALREADY_EXIST})
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({ data: {
        email: email,
        password: passwordHash,
        name: name
    }});

    if(newUser){
        return res.status(HttpStatus.CREATED).json({
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            token: jwt.sign({id: newUser.id}, jwtSecret, {expiresIn:"1d"})
        })
    } else {
        return res.status(HttpStatus.BAD_REQUEST).json({message: ErrorMessage.INTERNAL_ERROR})
    }
    
};

export const current = (req, res, next) => {
    res.send('user current endpoint');
}

