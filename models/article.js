const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleScheme = new Schema({
	name: String,
	year: Number,
	description: String,
	tags: [String],
	author: String,
	imgLink: String,
});

module.exports = mongoose.model("Article", articleScheme);