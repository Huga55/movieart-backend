const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

//for working cors
app.use(cors());
app.options("*", cors());

//for send JSON without problem, with parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mainRouter = require("./routes/mainRouter.js");

app.use("/", mainRouter);

mongoose.connect("mongodb://localhost:27017/movieartdb", {useUnifiedTopology: true}, function(err) {
	if(err) return console.log(err);
	app.listen(8080);
});