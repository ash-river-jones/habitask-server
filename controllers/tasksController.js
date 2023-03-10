const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.getTasks = (req, res) => {
	knex('tasks')
		.select('*')
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ message: `there was an error retreiving tasks`, error: err });
		});
};

exports.postTask = (req, res) => {
	if (!req.body.title || !req.body.priority || !req.body.status || !req.body.user_id || !req.body.category_id){
        res.status(400).json({message: `Error: Invalid/Incomplete Request`})
    } else {
		knex('tasks')
			.insert({
				task_id: uuidv4(),
				title: req.body.title,
				description: req.body.description,
				priority: req.body.priority,
				status: req.body.status,
				due_date: req.bodu.due_date,
				is_repeated: req.body.is_repeated,
				repeat_frequency: req.body.repeat_frequency,
				user_id: req.body.user_id,
				category_id: req.body.category_id,
			})
			.then((data) => {
				res.status(201).json({ message: `Task created`, data: data });
			})
			.catch((err) => {
				res.status(400).json({
					message: `Error creating task`,
					error: err,
				});
			});
    }
};