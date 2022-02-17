// @desc 	Get goals
// @route 	GET /api/goals
// @access 	Private
exports.getGoals = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Get goals',
	});
};
// @desc 	Set goals
// @route 	POST /api/goals
// @access 	Private
exports.setGoal = (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}
	const goal = req.body;
	res.status(200).json({
		status: 'success',
		message: 'Set goals',
		goal,
	});
};
// @desc 	Update goals
// @route 	PUT /api/goals/:id
// @access 	Private
exports.updateGoal = (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		status: 'success',
		message: `Update ${id} goals`,
	});
};
// @desc 	Delete goals
// @route 	DELETE /api/goals/:id
// @access 	Private
exports.deleteGoal = (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		status: 'success',
		message: `Delete ${id} goals`,
	});
};
