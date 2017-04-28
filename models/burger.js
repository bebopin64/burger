var orm = require("./../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(result) {
			cb(result);
		});
	},
	insertOne: function(value, cb) {
		orm.insertOne("burgers", value, function(result) {
			cb(result);
		});
	},
	updateOne: function(id, cb) {
		orm.updateOne("burgers", id, function(result) {
			cb(result);
		});
	}
};

module.exports = burger;