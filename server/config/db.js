const mongoose = require('mongoose');

const connectToDb = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`MongoDB Connected:${con.connection.host}`.cyan.underline);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectToDb;
