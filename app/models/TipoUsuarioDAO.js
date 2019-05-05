function TipoUsuarioDAO(application){
	this._connection = application.config.dbconnection();
}

TipoUsuarioDAO.prototype.getTiposUsuarios =  function(callback){
	this._connection.query("SELECT * FROM tipoUsuario", callback);
}

TipoUsuarioDAO.prototype.getTipoUsuario =  function(id, callback){
	this._connection.query("SELECT * FROM tipoUsuario WHERE idTipoUsuario = " + id, callback);
}

TipoUsuarioDAO.prototype.removeTipoUsuario = function(id, callback){
	this._connection.query("DELETE FROM tipoUsuario WHERE idTipoUsuario = " + id, callback);
}

TipoUsuarioDAO.prototype.saveTipoUsuario = function(tipoUsuario, callback){
	this._connection.query("INSERT INTO tipoUsuario SET ?", tipoUsuario, callback);
}

TipoUsuarioDAO.prototype.editTipoUsuario = function(id, tipoUsuario, callback){
	this._connection.query("UPDATE tipoUsuario SET descricao = '"+ tipoUsuario.descricao + "' WHERE idTipoUsuario = " + id, callback);
}

TipoUsuarioDAO.prototype.checkForEquals = function(descricao, callback){
	this._connection.query("SELECT * FROM tipoUsuario WHERE descricao = '" +descricao+"'", callback);
}

module.exports = function(){
	return TipoUsuarioDAO;
}