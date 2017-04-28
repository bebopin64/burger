var connection = require("./connection.js");

var orm = {
	selectAll: function(table) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, result) {
			console.log(result);
    	});
	},
	insertOne: function(stuff) {

	},
	updateOne: function(stuff) {

	}
}

module.exports = orm;