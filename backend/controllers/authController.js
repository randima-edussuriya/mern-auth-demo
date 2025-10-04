import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import logger from "../utils/logger.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if user already exist
    const existinUser = await userModel.findOne({ email });
    if (existinUser)
      return res
        .status(409)
        .json({ success: false, message: "User already exist" });

    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again later",
    });
    logger.error(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //check if user exist
    const user = await userModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    //check password
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched)
      return res
        .status(401)
        .json({ success: false, message: "Inavlid creadentials" });

    //generate jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //generate cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res
      .status(200)
      .json({ sucess: true, data: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try agin later",
    });
    logger.error(error);
  }
};

export const logout = async (req, res) => {};
