const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create your schema here

const cardSchema = new Schema({
	id: Number,
	question: String,
	answer: String,
});

module.exports = mongoose.model('card', cardSchema);