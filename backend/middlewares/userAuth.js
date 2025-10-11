import logger from "../utils/logger.js";
import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized access. Please login again.",
    });
  try {
    //verify token
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body = { userId: tokenDecoded.id };
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
    logger.error(error);
  }
};

export default userAuth;
