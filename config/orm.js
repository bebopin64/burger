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
		connection.query(queryString, [table, value], function(err, result) {
			console.log(result);
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, id, cb) {
		var queryString = "UPDATE ?? SET devoured = false WHERE id = ?";
		connection.query(queryString, [table, id], function(err, result) {
			console.log(result);
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;