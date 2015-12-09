var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = require('./user.js');
var findOrCreate = require('mongoose-findorcreate')


var requestSchema = new Schema({
	title: String,
	course: String,
	user: String
});

requestSchema.set('toJSON', {
  virtuals: true
});


var request = mongoose.model('requests', requestSchema);
module.exports = request;