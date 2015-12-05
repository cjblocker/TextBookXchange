var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = require('./user.js');
var findOrCreate = require('mongoose-findorcreate')


var textBookSchema = new Schema({
	title: String,
	courseNumber: String,
	edition: String,
	list_type: String,
	price: Number,
	user: String
});

textBookSchema.set('toJSON', {
  virtuals: true
});


var textBook = mongoose.model('textBooks', textBookSchema);
module.exports = textBook;