function BagDAO(application){
	this._connection = application.config.dbconnection();
}

BagDAO.prototype.getBags = function(callback){
    this._connection.query('SELECT * FROM bag', callback)
}

BagDAO.prototype.getBag = function(idbag, callback){
    console.log(idbag.idbag);
    this._connection.query('SELECT * FROM bag where idBag = ' + idbag.idbag, callback);
}

BagDAO.prototype.saveBag = function(bag, callback){
    this._connection.query('INSERT INTO bag SET ?', bag, callback);
}

BagDAO.prototype.removeBag = function(id, callback){
	this._connection.query('DELETE FROM bag WHERE idBag = ' + id, callback);
}

BagDAO.prototype.editBag = function(id, callback){
	this._connection.query('UPDATE bag SET ? WHERE idBag = ' + id, callback);
}

module.exports = function(){
    return BagDAO;
}