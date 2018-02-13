var session = require ('express-session');
	Post 	= require ('../models/post');
	User 	= require ('../models/user');

module.exports = {
	create: (req, res) => {
		const post = new Post(req.body);

		post._user = session.user_id;
		
		post.save( (err) => {
			if (err) {
				return res.status(400).json(err);
			}
			
			return res.json(post);
		});
	},
	index: (req, res) => {
		Post.find({})
		.sort({createdAt: -1})
		.populate('_user')
		.exec( (err, posts) => {
			if (err) {
				return res.status(400).json(err);
			}
			// console.log('posts', posts);
			return res.json(posts);
		})
	},
	show: (req, res) => {
		Question.find({_id: req.params.id})
		.populate('answers')
		.exec( (err, question) => {
			if (err) {
				return res.status(400).json(err);
			}
			console.log('question', question);
			return res.json(question);
		})
	},
	destroy: (req, res) => {
		Post.remove({_id: req.params.id}, (err, post) => {
			if (err) {
				return res.status(400).json(err);
			}
			console.log('post', post);
			return res.json(post);
		})
	}

}