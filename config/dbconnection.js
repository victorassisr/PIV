const mysql = require('mysql2');
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost', //Host
        user: 'root', //user
        port: '3306', //port
        password: 'victoradmin', //senha do host
        database: 'auma'  //name of database 
    })
}

module.exports = function(){
    return connMySQL;
}
