const express = require("express");
const app = express();
const chalk = require("chalk");

/**
 * @global initializtion
 */
// global.CONFIG = "../util/logger.js";
global.log = require("../util/logging.js");
log.info("test");
const PORT = 3000;
app.set('port', PORT);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin','*');
	next();
});

app.listen(app.get('port'), () => {
	console.log(
		`App is running with ${PORT} port in ${app.get("env")} mode`, chalk.green("✓")
	);
});