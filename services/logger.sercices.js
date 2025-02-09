const winston = require('winston');
const dotenv = require('dotenv');
dotenv.config();

const dateFormat = () => {
    return new Date().toISOString();
};

class LoggerService {
    constructor(route) {
        this.route = route;

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({ level, message, timestamp, ...meta }) => {
                    let logMessage = `${dateFormat()} | ${level.toUpperCase()} | ${message}`;
                    if (Object.keys(meta).length) {
                        logMessage += ` | Data: ${JSON.stringify(meta)}`;
                    }
                    return logMessage;
                })
            ),
            transports: [
                new winston.transports.File({
                    filename: `${process.env.LOGFILEPATH}/${route}.log`,
                }),
                new winston.transports.Console(), // Optional: Log to console as well
            ],
        });
    }

    log(level, message, obj = null) {
        if (obj) {
            this.logger.log(level, message, obj);
        } else {
            this.logger.log(level, message);
        }
    }

    info(message, obj = null) {
        this.log('info', message, obj);
    }

    error(message, obj = null) {
        this.log('error', message, obj);
    }

    debug(message, obj = null) {
        this.log('debug', message, obj);
    }
}

module.exports = LoggerService;
