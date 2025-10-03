import winston from "winston";

//define log format
const logFormat = winston.format.printf(
  ({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
  }
);

const logger = winston.createLogger({
  level: "info", // minimum level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }), //capture stack trace
    logFormat
  ),
  transports: [new winston.transports.File({ filename: "logs/combined.log" })],
});

//console log for development
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console());
}

export default logger;
