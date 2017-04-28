var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result) {
			console.log(result);
			if (err) {
				throw err;
			}
			cb(result);
    	});
	},
	insertOne: function(table, value, cb) {
		var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,false)";
		connection.query(queryString, [table, burgerName], function(err, result) {
			console.log(result);
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, value, boolean, id, cb) {
		var queryString = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?";
		connection.query(queryString, [table, value, boolean, id], function(err, result) {
			console.log(result);
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;