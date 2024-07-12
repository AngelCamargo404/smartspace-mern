import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.post(
    '/registrarse',
    expressAsyncHandler(async (req, res) => {
        console.log(User);
        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password ? bcrypt.hashSync(req.body.password) : null,
        });
        console.log(newUser);
        const user = await newUser.save();
        console.log(user);
        res.send({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin
        });
    })
);

export default userRouter;