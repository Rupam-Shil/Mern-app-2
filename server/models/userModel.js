const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
			min: [6, 'Password must be at least 6 characters'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
