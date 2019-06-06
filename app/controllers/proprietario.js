module.exports.formProprietario = function(application, req, res){
	res.render('proprietario/form', { 
	validacao: {},
	proprietario: {},
	title: 'Cadastro de proprietário' 
  })
}

module.exports.proprietario_salvar = function(application, req, res){
	const proprietario = req.body;
	req.assert('nome', 'Nome é obrigatório').notEmpty();
  
	var errors = req.validationErrors();
	
	if(errors){
		res.render('proprietario/form',{ 
			validacao: errors,
			proprietario: proprietario
		})
	}

	const connection = application.config.dbConnection();

	const proprietarioModel = new application.app.models.ProprietarioDAO(connection);

	proprietarioModel.salvarProprietario(proprietario, function(error, result){
		res.send('Salvo')
	})
}

module.exports.getProprietarios = function(application, req, res){
	
	const connection = application.config.dbConnection();

	const proprietarioModel = new application.app.models.ProprietarioDAO(connection);

	proprietarioModel.obterProprietarios(function(error, result){
		res.send(result)
	})
    
}
