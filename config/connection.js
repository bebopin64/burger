var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "elecornos",
  database: "burgers_db"
});

module.exports = connection;