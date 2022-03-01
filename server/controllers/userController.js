const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// @desc 	Register new user
// @route 	POST /api/users
// @access 	Public
exports.registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please add all fields');
	}
	const userExist = await User.find({ email });
	if (userExist) {
		res.status(400);
		throw new Error('User already exists');
	}
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