var path  	 = require('path');
	users 	 = require('../controllers/users');
	sessions = require('../controllers/sessions');
	posts 	 = require('../controllers/posts');

module.exports = (app) => {
	//Server Routes are plural
	app.post('/users', users.create);
	
	app.get('/sessions', sessions.find);
	app.post('/sessions', sessions.create);

	app.get('/posts', posts.index);
	app.post('/posts', posts.create);
	app.delete('/posts/:id', posts.destroy);
	app.delete('/sessions', sessions.delete)

	app.all("*", (req, res, next) =>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}