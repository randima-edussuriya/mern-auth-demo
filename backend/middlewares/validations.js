import validator from "validator";
import mongoose from "mongoose";

export const validateRegister = (req, res, next) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

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
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

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

export const validateUserId = (req, res, next) => {
  // make string to avoid number input due to it's not detected by mongoose.Types.ObjectId.isValid
  const userId = String(req.body.userId).trim();
  //validate empty
  if (!userId)
    return res
      .status(400)
      .json({ success: false, message: "User ID is required" });
  // validate ObjectId format before querying the database
  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  req.body = { userId };
  next();
};
