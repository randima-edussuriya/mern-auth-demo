import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //check if user already exist
    // const existinUser = await userModel.findOne({ email });
    // if (existinUser)
    //   return res.json({ success: false, message: "User already exist" });

    // const hashedPassword = await bcrypt.hash(password, 10);

    //save user
    // const user = new userModel({ name, email, password: hashedPassword });
    // await user.save();
    // return res.json({ success: true });
    return res.json({ name, email, password });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {};
export const logout = async (req, res) => {};
