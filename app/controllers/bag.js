module.exports.getBags = function(application,req,res){

	var bagDAO = new application.app.models.BagDAO(application);
    bagDAO.getBags(function(err, data){
    	if(err){
    		throw err;
    	}
    	res.send(data);
    });
}

module.exports.getBag = function(application, req, res, id){

	var id = req.params.id;

	var bagDAO = new application.app.models.BagDAO(application);
		bagDAO.getBag(id, function(err, data){
	    if(err){
	    	throw err;
	    }
	    res.send(data);
	});
}

module.exports.removeBag = function(application, req, res, id){

	var id = req.params.id;
	
	var bagDAO = new application.app.models.BagDAO(application);
		bagDAO.removeBag(id, function(err, data){
	    if(err){
	    	throw err;
	    }
	    if(data.affectedRows == 1){
	    	res.send({
                sucesso : "Excluído com sucesso"
            });
	    } else {
	    	res.send({
                erro : "Não foi possível excluir. Registro não existe ou já foi apagado"
            });
	    }
	});
}

module.exports.saveBag = function(application, req, res){

	var bagDAO = new application.app.models.BagDAO(application);
		bagDAO.saveBag(req.body, function(err, data){
	    
	    if(err){
	    	throw err;
	    }

	    if(data.affectedRows == 1){
	    	res.send({ 
                sucesso : "Inserido com sucesso", lastInsertId : data.insertId 
            });
	    }else{
	    	res.send({ 
                erro : "Houve um erro ao cadastrar"
            });
	    }
	    
	});
}

module.exports.editBag = function(application, req, res){

	var bagDAO = new application.app.models.BagDAO(application);
    bagDAO.editBag(req.params.id, req.body, function(err, data){
	    
	    if(err){
	    	throw err;
	    }

	    if(data.affectedRows == 1){
	    	res.send({ 
                sucesso : "Alterado com sucesso", changedRows : data.changedRows 
            });
	    }else{
            res.send({ 
                erro : "Houve um erro ao alterar o registro"
        });
	    }

	});
}