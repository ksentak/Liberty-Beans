require("dotenv").config();
var mysql = require('mysql');

module.exports = {
  development: {
    username: "root",
    password: process.env.SQL_PASS,
    database: "coffeeproject",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "coffeeproject",
    host: "localhost",
    dialect: "mysql",
    logging: false 
  },
  production: {
    // eslint-disable-next-line camelcase
      // Database is JawsDB on Heroku
      connection = mysql.createConnection(process.env.JAWSDB_URL), 
      dialect: "mysql"
  },
  
};
