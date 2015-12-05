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
	price: String,
	user: String,
	userEmail: String
	//add a condition of the book
	//add a field for notes

});

textBookSchema.set('toJSON', {
  virtuals: true
});


var textBook = mongoose.model('books', textBookSchema);
module.exports = textBook;