const login = require("../routes/login");
const authToken = require('../middleware/token');

module.exports = function (app) {
	// app.use('/live', authToken.verifyToken, live);
    // app.use('/record', authToken.verifyToken, validator(schema.recordSchema), record);
    app.use('/login', login);
};