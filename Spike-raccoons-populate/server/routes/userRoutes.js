import express from 'express';
import { findUserByEmail, getAllUsers, login, signup, test, updateUser } from '../controllers/userControllers.js';

const userRouter = express.Router()

userRouter.get("/test", test);
userRouter.get("/all", getAllUsers);
userRouter.get("/find/:email", findUserByEmail);

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/update/:id", updateUser);

export default userRouter