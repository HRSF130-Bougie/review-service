const mysql = require('mysql');


const connection = mysql.createConnection({
  user: 'root',
  password: 'Heno12345$',
  database: 'reviewService',
});

//console.log(connection)
connection.connect();

module.exports =  connection ;
