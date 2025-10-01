import express from "express";
import { login, register } from "../controllers/authController.js";
import { validateLogin, validateRegister } from "../middlewares/validations.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);

export default authRouter;
