import { createLogger, transports, format }  from 'winston';

const { combine, timestamp, printf } = format;

const loggerFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    loggerFormat
  ),
  transports: [new transports.Console()]
});

export default logger;
