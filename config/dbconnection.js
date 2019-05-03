const mysql = require('mysql');  
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost', 
        user: 'root', 
        port: '3306', 
        password: '', 
        database: 'auma'  
    })
}

module.exports = function(){
    return connMySQL;
}
