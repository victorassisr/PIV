const mysql = require('mysql');  
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost', 
        port: '3306', 
        user: 'root', 
        password: 'admin', 
        database: 'auma'  
    })
}

module.exports = function(){
    return connMySQL;
}
