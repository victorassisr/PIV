module.exports.formulario_inclusao_bag = function(application,req,res){
      
      res.render('bag/form', {
        title: 'Cadastro de bag',
        validacao: {},
        bag: {}
      });
}

module.exports.salvar_bag = function(application, req, res){
    
      const bag = req.body;
      
      req.assert('rfid', 'RFID é obrigatório').notEmpty();
      req.assert('lote', 'Lote é obrigatório').notEmpty();
      req.assert('lote', 'O lote deve conter entre 5 e 10 caracteres').len(5, 10);     
      req.assert('data_entrada', 'Data de entrada é obrigatório').notEmpty();
      req.assert('data_saida', 'Data de saida é obrigatório').notEmpty();
      req.assert('peso', 'Peso é obrigatório').notEmpty();
      req.assert('localizacao_fila', 'Localização da fila é obrigatório').notEmpty();
      req.assert('localizacao_altura', 'Localização da altura é obrigatório').notEmpty();
      req.assert('localizacao_setor', 'Localização de setor é obrigatório').notEmpty();
      req.assert('localizacao_setor', 'Localização de setor deve conter pelo menos 1 caracter').len(1, 1);
      req.assert('status_processamento', 'Status de processamento é obrigatório').notEmpty();

      const errors = req.validationErrors();

      if(errors){
            res.render('bag/form', {
               validacao: errors,
               bag: bag,
               title: 'Cadastro de Bag'
            });

            return;
      }
      
      const connection = application.config.dbConnection();
      const bagModel = new application.app.models.BagDAO(connection);
      bagModel.salvar_bag(bag, function(error, result){
            res.send('Salvo');
      })
}
