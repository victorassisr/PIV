const mysql = require('mysql2');
const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'projectpi.cvubxoiqjjki.us-east-1.rds.amazonaws.com', //Host da Intância AWS
        user: 'root', //usuário da Intância AWS
        port: '3306', //porta da Intância AWS
        password: 'password_', //senha do host da Intância AWS
        database: 'auma'  //nome da database da Intância AWS
    })
}

module.exports = function(){
    return connMySQL;
}
