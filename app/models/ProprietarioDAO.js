function ProprietarioDAO(application){
	this._connection = application.config.dbconnection();
}
ProprietarioDAO.prototype.getProprietarios = function(callback){
	this._connection.query("SELECT * FROM proprietario", callback);
}

ProprietarioDAO.prototype.getProprietario = function( id, callback){
	this._connection.query("SELECT * FROM proprietario WHERE idProprietario = " + id, callback);
}

ProprietarioDAO.prototype.removeProprietario = function( id, callback){
	this._connection.query("DELETE FROM proprietario WHERE idProprietario = " + id, callback);
}

ProprietarioDAO.prototype.saveProprietario = function( proprietario, callback){
	this._connection.query("INSERT INTO proprietario SET ?", proprietario, callback);
}
ProprietarioDAO.prototype.editProprietario = function(id, proprietario, callback){
	this._connection.query("UPDATE proprietario SET Nome = '" + proprietario.nome + 
						"' WHERE idProprietario = "+ id, callback);
}
module.exports = function(){
	return ProprietarioDAO;
}