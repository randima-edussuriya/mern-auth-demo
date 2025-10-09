import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
} from "../controllers/authController.js";
import {
  validateLogin,
  validateRegister,
  validateUserId,
} from "../middlewares/validations.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);
authRouter.post("/logout", logout);

authRouter.post("/send-verify-otp", validateUserId, sendVerifyOtp);

export default authRouter;
