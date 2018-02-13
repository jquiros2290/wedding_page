// require mongoose
var mongoose = require('mongoose');

// create the schema
var PostSchema = new mongoose.Schema({
 	content: {
 		type: String,
 		required: [true, "Post is required"],
 		minlength: [10, "Post must be atleast 10 characters"]
 	},
 	likes: {
 		type: Number,
 		default: 0
 	},
 	_user: {
 		type: mongoose.Schema.Types.ObjectId,
 		ref: 'User'
 	}
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);