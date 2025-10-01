import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

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
    console.log(error);
  }
};

export const login = async (req, res) => {};
export const logout = async (req, res) => {};
