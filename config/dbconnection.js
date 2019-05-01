const mysql = require('mysql2');
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost', //AWS instance
        user: 'root',
        port: '3306',
        password: 'victoradmin',
        database: 'auma' 
    })
}

module.exports = function(){
    return connMySQL;
}
