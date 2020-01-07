const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'WCS2019',
  database : 'homerodyssey'
});
module.exports  =  connection;