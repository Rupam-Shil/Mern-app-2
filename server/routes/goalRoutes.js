const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Get goals',
	});
});

router.post('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Set goals',
	});
});
router.put('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		status: 'success',
		message: `Update ${id} goals`,
	});
});
router.put('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		status: 'success',
		message: `Delete ${id} goals`,
	});
});

module.exports = router;
