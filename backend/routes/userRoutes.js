import express from "express";
import { getUser } from "../controllers/userController.js";
import userAuth from "../middlewares/userAuth.js";

const userRouter = express.Router();

userRouter.get("/", userAuth, getUser);

export default userRouter;
