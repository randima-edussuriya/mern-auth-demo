import winston from "winston";
import "winston-daily-rotate-file";

//define log format
const logFormat = winston.format.printf(
  ({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
  }
);

const dailyRotateFile = new winston.transports.DailyRotateFile({
  filename: "logs/app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

const logger = winston.createLogger({
  level: "info", // minimum level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }), //capture stack trace
    logFormat
  ),
  transports: [dailyRotateFile],
  exceptionHandlers: [dailyRotateFile],
});

//console log for development
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console());
}

export default logger;
