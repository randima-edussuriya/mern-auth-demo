import express from "express";
import { register } from "../controllers/authController.js";
import { validateRegister } from "../middlewares/validations.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, register);

export default authRouter;
