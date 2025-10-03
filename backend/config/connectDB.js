import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth-demo`);
    logger.info("Initial database connection successfull");
  } catch (error) {
    logger.error(error);
  }

  //setup event listeners
  mongoose.connection.on("connected", () => {
    logger.info("Database connected");
  });
  mongoose.connection.on("error", (error) => {
    logger.error("Database error:", error);
  });
  mongoose.connection.on("disconnected", () => {
    logger.info("Database disconnected");
  });
};

export default connectDB;
