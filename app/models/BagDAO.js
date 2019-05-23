function BagDAO(connection) {
    this._connection = connection;
}

BagDAO.prototype.salvar_bag = function (bag, callback) {
    this._connection.query('INSERT INTO bag SET ?', bag, callback);
}

module.exports = function(){
    return BagDAO;
}
