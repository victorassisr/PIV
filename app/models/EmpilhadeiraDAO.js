function EmpilhadeiraDAO(application){
	this._connection = application.config.dbconnection();
}

EmpilhadeiraDAO.prototype.getEmpilhadeiras =  function(callback){
	this._connection.query("SELECT * FROM empilhadeira", callback);
}

EmpilhadeiraDAO.prototype.getEmpilhadeira =  function(id, callback){
	this._connection.query("SELECT * FROM empilhadeira WHERE idEmpilhadeira = " + id, callback);
}

EmpilhadeiraDAO.prototype.removeEmpilhadeira = function(id, callback){
	this._connection.query("DELETE FROM empilhadeira WHERE idEmpilhadeira = " + id, callback);
}

EmpilhadeiraDAO.prototype.saveEmpilhadeira = function(empilhadeira, callback){
	this._connection.query("INSERT INTO empilhadeira SET ?", empilhadeira, callback);
}

EmpilhadeiraDAO.prototype.editEmpilhadeira = function(id, empilhadeira, callback){
	this._connection.query("UPDATE empilhadeira SET statusLiberado = "+ empilhadeira.statusLiberado+ " WHERE idEmpilhadeira = " + id, callback);
}

module.exports = function(){
	return EmpilhadeiraDAO;
}