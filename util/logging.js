const {createLogger, format, transports} = require('winston')
const {combine, timestamp, label, printf} = format;

const logFormat = printf(({level, message, label, timestamp}) => {
	return `${timestamp} [${label} ${level}: ${message}]`;
});

const consoleLogConfig = {
	"logConfig": {
		"consoleLogConfig": {
			"level": "debug",
			"handleExceptions": true,
			"json": false,
			"colorize": true,
			"prettyPrint": true
		},
		"enableConsoleLog": true
	}
};

const logger = createLogger({
	format: combine(
		label({label: 'right meow!'}),
		timestamp(),
		logFormat
	),
	transports: [new transports.Console()]
});

logger.log({
	level: 'info',
	message: 'What time is the testing at?'
  });

module.exports = logger;