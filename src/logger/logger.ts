import winston,{format} from 'winston';
const logger = winston.createLogger({
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        })
      ),
    transports: [
      new winston.transports.Console(),]
  });
  
export default logger;