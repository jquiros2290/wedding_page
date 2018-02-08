var mongoose = require('mongoose'),
	db_name = "wedding_app";

mongoose.connect(`mongodb://localhost/${db_name}`);