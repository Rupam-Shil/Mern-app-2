if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const cors = require('cors');

const app = express();
//middlewares

app.use(cors());

//routes - connection
app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(process.env.PORT, () => {
	console.log(`Listening on port no ${process.env.PORT}`);
});
