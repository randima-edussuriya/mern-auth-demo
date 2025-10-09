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
  validateSendVerifyOtp,
  validateVerifyEmail,
} from "../middlewares/validations.js";

const authRouter = express.Router();

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);
authRouter.post("/logout", logout);

authRouter.post("/send-verify-otp", validateSendVerifyOtp, sendVerifyOtp);
authRouter.post("/verify-email", validateVerifyEmail, verifyEmail);

export default authRouter;
