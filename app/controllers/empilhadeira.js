module.exports.getEmpilhadeiras = function(application,req,res){
	//requisitar do DAO as info do banco utilizando as models
	//Após recuperar as info, controller fornecer ao user, já q n temos views.
	var empilhadeiraDAO = new application.app.models.EmpilhadeiraDAO(application);
    empilhadeiraDAO.getEmpilhadeiras(function(err, data){
    	if(err){
    		throw err;
    	}
    	res.send(data);
    });
}

module.exports.getEmpilhadeira = function(application, req, res, id){

	var id = req.params.id;

	var empilhadeiraDAO = new application.app.models.EmpilhadeiraDAO(application);
		empilhadeiraDAO.getEmpilhadeira(id, function(err, data){
	    if(err){
	    	throw err;
	    }
	    res.send(data);
	});
}

module.exports.removeEmpilhadeira = function(application, req, res, id){

	var id = req.params.id;
	
	var empilhadeiraDAO = new application.app.models.EmpilhadeiraDAO(application);
		empilhadeiraDAO.removeEmpilhadeira(id, function(err, data){
	    if(err){
	    	throw err;
	    }
	    if(data.affectedRows == 1){
	    	res.send({sucesso : "Excluído com sucesso!"});
	    } else {
	    	res.send({erro : "Não foi possível excluir. Registro não existe ou já foi apagado!"});
	    }
	});
}

module.exports.saveEmpilhadeira = function(application, req, res){

	var empilhadeiraDAO = new application.app.models.EmpilhadeiraDAO(application);
		empilhadeiraDAO.saveEmpilhadeira(req.body, function(err, data){
	    
	    if(err){
	    	throw err;
	    }

	    if(data.affectedRows == 1){
	    	res.send({ sucesso : "Inserido com sucesso", lastInsertId : data.insertId });
	    }else{
	    	res.send({ erro : "Houve um erro ao cadastrar!"});
	    }
	    
	});
}

module.exports.editEmpilhadeira = function(application, req, res){

	var empilhadeiraDAO = new application.app.models.EmpilhadeiraDAO(application);
		empilhadeiraDAO.editEmpilhadeira(req.params.id, req.body, function(err, data){
	    
	    if(err){
	    	throw err;
	    }

	    if(data.affectedRows == 1){
	    	res.send({ sucesso : "Alterado com sucesso", changedRows : data.changedRows });
	    }else{
	    	res.send({ erro : "Houve um erro ao alterar o registro!"});
	    }

	});
}