import userModel from "../models/userModel.js";
import logger from "../utils/logger.js";

export const getUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await userModel.findById(userId);
    //check if user exist
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    //return user data
    return res
      .status(200)
      .json({
        success: true,
        user: {
          name: user.name,
          email: user.email,
          isAccountVerified: user.isAccountVerified,
        },
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again later",
    });
    logger.error(error);
  }
};
