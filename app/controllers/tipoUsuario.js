module.exports.getTiposUsuarios = function(application,req,res){

	var tipoUsuarioDAO = new application.app.models.TipoUsuarioDAO(application);

    tipoUsuarioDAO.getTiposUsuarios(function(err, data){
    	if(err){
    		throw err;
    	}
    	
    	if((typeof data[0]) === 'object'){
			res.send(data);
		}else{
			res.status(404).send({ info : "Nenhum tipo de usuário cadastrado ainda." });
		}

    });
}

module.exports.getTipoUsuario = function(application, req, res, id){

	var id = req.params.id;

	var tipoUsuarioDAO = new application.app.models.TipoUsuarioDAO(application);
	tipoUsuarioDAO.getTipoUsuario(id, function(err, data){
		
		if(err){
		    throw err;
		}

		if((typeof data[0]) === 'object'){
			res.send(data);
		}else{
			res.status(404).send({ info : "Nenhum tipo de usuário encontrado." });
		}

	});
}

module.exports.removeTipoUsuario = function(application, req, res, id){

	var id = req.params.id;

	var tipoUsuarioDAO = new application.app.models.TipoUsuarioDAO(application);

	tipoUsuarioDAO.removeTipoUsuario(id, function(err, data){

		if(err){
		    throw err;
		}

		if(data.affectedRows == 1){
		    res.send({sucesso : "Excluído com sucesso!"});
		} else {
		    res.status(404).send({erro : "Não foi possível excluir. Registro não existe ou já foi excluído!"});
		}
	});

}

module.exports.saveTipoUsuario = function(application, req, res){

	var tipoUsuario = req.body;

	var tipoUsuarioDAO = new application.app.models.TipoUsuarioDAO(application);

	if(tipoUsuario.descricao != undefined && tipoUsuario.descricao != ""){
		tipoUsuarioDAO.checkForEquals(tipoUsuario.descricao, function(err, data){
			if(data[0] === undefined){
				tipoUsuarioDAO.saveTipoUsuario(tipoUsuario, function(err, data){
				    
					if(err){
					    throw err;
					}

					if(data.affectedRows == 1){
					    res.send({ sucesso : "Inserido com sucesso", lastInsertId : data.insertId });
					}else{
					    res.status(500).send({ erro : "Houve um erro ao cadastrar!"});
					}
				    
				});
			} else {
				res.send({ info : "Já existe um tipo de usuario igual!" });
			}
		});
	} else {
		res.status(400).send({ erro : "Os parametros especificados são inválidos!" });
	}
}

module.exports.editTipoUsuario = function(application, req, res){

	var id = req.params.id;
	var tipoUsuario = req.body;

	var tipoUsuarioDAO = new application.app.models.TipoUsuarioDAO(application);

	if(tipoUsuario.descricao != undefined && tipoUsuario.descricao != ""){

		tipoUsuarioDAO.checkForEquals(tipoUsuario.descricao, function(err, data){

			if(data[0] === undefined){
				tipoUsuarioDAO.editTipoUsuario(req.params.id, tipoUsuario, function(err, data){
				    
					if(err){
						throw err;
					}

					if(data.affectedRows == 1){
						res.send({ sucesso : "Alterado com sucesso", changedRows : data.changedRows });
					}else{
						res.status(500).send({ erro : "Houve um erro ao alterar o registro!"});
					}

				});

			} else {
				res.send({ info : "Já existe um tipo de usuario igual!" });
			}
		});
	} else {
		res.status(400).send({ erro : "Os parametros especificados são inválidos!" });
	}
}