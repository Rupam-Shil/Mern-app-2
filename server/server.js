if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectToDb = require('./config/db');
const colors = require('colors');

connectToDb();
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes - connection
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
	console.log(`Listening on port no ${process.env.PORT}`);
});
