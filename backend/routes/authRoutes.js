import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import {
  validateLogin,
  validateRegister,
  validateVerifyEmail,
} from "../middlewares/validations.js";
import userAuth from "../middlewares/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);
authRouter.post("/logout", logout);

authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-email", validateVerifyEmail, verifyEmail);

export default authRouter;
