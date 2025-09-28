import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth-demo`);
    console.log("Initial database connection successfull");
  } catch (error) {
    console.log("Initial database connection failed:", error);
  }

  //setup event listeners
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Database error:", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
};

export default connectDB;
