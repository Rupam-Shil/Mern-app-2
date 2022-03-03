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
	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(400);
		throw new Error('User already exists');
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Invalid User data');
	}
});
// @desc 	Login user
// @route 	POST /api/users/login
// @access 	Public
exports.loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		res.status(400);
		throw new Error('All Input Fields are required');
	}
	const findUser = await User.findOne({ email });
	if (!findUser) {
		res.status(400);
		throw new Error('User not registered');
	}
	const isPasswordMatched = await bcrypt.compare(password, findUser.password);
	if (!isPasswordMatched) {
		res.status(400);
		throw new Error('Invalid Credentials');
	}
	res.status(200).json({
		_id: findUser._id,
		name: findUser.name,
		email: findUser.email,
		token: generateToken(findUser._id),
	});
});
// @desc 	Get user data
// @route 	POST /api/users/me
// @access 	Private
exports.getUser = asyncHandler(async (req, res) => {
	res.json(req.user);
});

//Generate Token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '3d',
	});
};
