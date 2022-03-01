const asyncHandler = require('express-async-handler');
// @desc 	Register new user
// @route 	POST /api/users
// @access 	Public
exports.registerUser = asyncHandler(async (req, res) => {
	res.json({ message: 'register users' });
});
// @desc 	Login user
// @route 	POST /api/users/login
// @access 	Public
exports.loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Login users' });
});
// @desc 	Get user data
// @route 	POST /api/users/me
// @access 	Private
exports.getUser = asyncHandler(async (req, res) => {
	res.json({ message: 'My data' });
});
