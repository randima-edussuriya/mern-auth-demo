import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoutes.js";
import logger from "./utils/logger.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("API is working");
});

//API end point
app.use("/api/auth", authRouter);

app.listen(port, () => {
  logger.info(`Server started on port: ${port}`);
});
