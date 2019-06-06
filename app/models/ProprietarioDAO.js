function ProprietarioDAO(connection){
	this._connection = connection;
}

ProprietarioDAO.prototype.getProprietario = function(callback){
	this._connection.query('select * from proprietario', callback);
}

ProprietarioDAO.prototype.salvarProprietario = function(proprietario, callback){
    this._connection.query('insert into proprietario set ? ', proprietario, callback);
}

ProprietarioDAO.prototype.obterProprietarios = function(callback){
    this._connection.query('select * from proprietario order by Nome asc', callback);
}

module.exports = function(){
	return ProprietarioDAO;
}