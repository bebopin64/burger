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
	updateOne: function(value, boolean, id, cb) {
		orm.updateOne("burgers", value, boolean, id, function(result) {
			cb(result);
		});
	}
};

module.exports = burger;