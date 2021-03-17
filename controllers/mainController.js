const Article = require("../models/article.js");

exports.index = function(request, response) {
	Article.find({}, function(err, articles) {
		if(err) {
			console.log(err);
			response.status(400).send({success: false, error: "Error with to get articles"});
		}
		response.send({success: true, data: articles});
	});
}