// Set up MySQL connection.
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cal_mel@1013",
    database: "burgers_db"
  });
}
connection.connect();
module.exports = connection;

  // Export connection for our ORM to use.
module.exports = connection;