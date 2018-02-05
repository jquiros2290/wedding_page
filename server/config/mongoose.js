var mongoose = require('mongoose'),
	db_name = "wedding_page";

mongoose.connect(`mongodb://localhost/${db_name}`);