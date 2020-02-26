const express = require("express");
const router = express.Router();
// const loginController = require('../controllers/login.controller');

// router.post('/', loginController.authenticateUser);
router.post('/', (req, res) => {
	res.send("post request respond");
});

module.exports = router;