module.exports.getProprietarios = function(application, req, res){
	var proprietarioDAO = new application.app.models.ProprietarioDAO(application);
	proprietarioDAO.getProprietarios(function(err, data){
		if (err) {
			throw err;
		}
		res.send(data);
	});
}
module.exports.getProprietario = function(application, req, res, id){
	
	var id = req.params.id;

	var proprietarioDAO = new application.app.models.ProprietarioDAO(application);
	proprietarioDAO.getProprietario(id, function(err, data){
		if (err) {
			throw err;
		}
		res.send(data);
	});
}

module.exports.removeProprietario = function(application, req, res, id){

	var id = req.params.id;
	
	var proprietarioDAO = new application.app.models.ProprietarioDAO(application);
		proprietarioDAO.removeProprietario(id, function(err, data){
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



module.exports.saveProprietario = function(application, req, res){

	var proprietarioDAO = new application.app.models.ProprietarioDAO(application);
		proprietarioDAO.saveProprietario(req.body, function(err, data){
	    
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

module.exports.editProprietario = function(application, req, res){

	var proprietarioDAO = new application.app.models.ProprietarioDAO(application);
		proprietarioDAO.editProprietario(req.params.id, req.body, function(err, data){
	    
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