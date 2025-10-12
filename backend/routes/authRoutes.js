import express from "express";
import {
  isAuthenticated,
  login,
  logout,
  register,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import {
  validateLogin,
  validateRegister,
  validateOtp,
  validateEmail,
} from "../middlewares/validations.js";
import userAuth from "../middlewares/userAuth.js";

const authRouter = express.Router();

//register, login, logout
authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);
authRouter.post("/logout", logout);

//email vaerification
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-email", userAuth, validateOtp, verifyEmail);

//check authentication
authRouter.post("/is-authenticated", userAuth, isAuthenticated);

//reset password
authRouter.post("/send-reset-otp", validateEmail, sendResetOtp);

export default authRouter;
