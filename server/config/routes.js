var path  	 = require('path');
	// users 	 = require('../controllers/users');
	// sessions = require('../controllers/sessions');

module.exports = (app) => {
	//Server Routes are plural
	// app.post('/users', users.create);
	
	// app.get('/sessions', sessions.find);
	// app.delete('/sessions', sessions.logout)

	app.all("*", (req, res, next) =>{
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}