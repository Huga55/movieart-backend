const express = require("express");
const mainRouter = express.Router();
const mainController = require("./../controllers/mainController.js");


mainRouter.get("/", mainController.index);

module.exports = mainRouter;