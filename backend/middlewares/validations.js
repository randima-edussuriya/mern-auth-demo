import validator from "validator";
import mongoose from "mongoose";

export const validateRegister = (req, res, next) => {
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim();
  const password = String(req.body.password || "").trim();

  // chechk empty
  if (!name || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Fields are required" });
  //validte email
  if (!validator.isEmail(email))
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });

  //validate password complexity
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  )
    return res.status(400).json({ success: false, message: "Weak password" });

  req.body = { name, email, password };
  next();
};

export const validateLogin = (req, res, next) => {
  const email = String(req.body.email || "").trim();
  const password = String(req.body.password || "").trim();

  //check empty
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Fields are required" });

  //validate email
  if (!validator.isEmail(email))
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });

  req.body = { email, password };

  next();
};

export const validateOtp = (req, res, next) => {
  const otp = String(req.body.otp || "").trim();

  //validate empty
  if (!otp)
    return res
      .status(400)
      .json({ success: false, message: "Fields are required" });

  //validate otp is 6-digit
  if (!/^\d{6}$/.test(otp))
    return res.status(400).json({ success: false, message: "Invalid OTP" });

  req.body.otp = otp;
  next();
};

export const validateEmail = (req, res, next) => {
  const email = String(req.body.email || "").trim();
  //validte empty
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required." });
  //validate email format
  if (!validator.isEmail(email))
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format." });
  req.body.email = email;
  next();
};

export const validateResetPassword = (req, res, next) => {
  const email = String(req.body.email || "").trim();
  const otp = String(req.body.otp || "").trim();
  const newPassword = String(req.body.newPassword || "").trim();

  //check empty
  if (!email || !otp || !newPassword)
    return res
      .status(400)
      .json({ success: false, message: "Fields are required." });
  //validate email
  if (!validator.isEmail(email))
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });
  //validate otp is 6-digit
  if (!/^\d{6}$/.test(otp))
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  //validate password complexity
  if (
    !validator.isStrongPassword(newPassword, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  )
    return res.status(400).json({ success: false, message: "Weak password" });

  req.body = { email, otp, newPassword };
  next();
};
