const mysql = require('mysql');
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'databaseinstance.cvubxoiqjjki.us-east-1.rds.amazonaws.com', //AWS instance
        user: 'root',
        password: 'password_',
        database: 'cadastro' 
    })
}

module.exports = function(){
    return connMySQL;
}
