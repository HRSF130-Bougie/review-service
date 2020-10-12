const mysql = require('mysql');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

console.log(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB );

const connection = mysql.createConnection({
  host: MYSQL_HOST ,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  port: 3306 
  
});

//console.log(connection)
connection.connect();


module.exports =  connection ;

