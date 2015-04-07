var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    FirstName 	: String,
    LastName	: String,
    UserName 	: String,
    Password 	: String,
    DoB 		: { type: Date, default:Date.now },
    Phone 		: Number,
    Address 	: String,
    City 		: String,
    State 		: String,
    Country 	: String,
	CreatedTimeStamp: { type: Date, default:Date.now }
});