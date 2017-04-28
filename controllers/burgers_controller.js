var express = require("express");
var router = express.Router();
var burger = require("./../models/burger.js");

router.get("/", function(req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", {burgers: data});
	});
});

router.post("/burgers/create", function(req, res) {
	burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function(data) {
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function(req, res) {
	burger.updateOne({"devoured": false}, req.params.id, function(data) {
		res.redirect("/burgers");
	});
});

module.exports = router;