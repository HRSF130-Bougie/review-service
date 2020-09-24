const mysql = require('mysql');
const connection = mysql.createConnection({
    user     : 'root',
    password : 'Heno12345$',
    database : 'reviewService'
});


connection.connect();

module.exports = connection;