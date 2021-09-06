const mysql = require("mysql");
const pool = mysql.createPool({
  host:"127.0.0.1",
  post:"8080",
  user:"root",
  password:"",
  database:"omj",
  connectionLimit:15
});

module.exports = pool;