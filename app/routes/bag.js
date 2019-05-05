module.exports = function(application){
  application.get('/bags', function(req, res){
      application.app.controllers.bag.getBags(application,req,res);
  });

  application.get('/bag/:id', function(req, res){
      application.app.controllers.bag.getBag(application,req,res, req.params.id);
  });

  application.delete('/bag/excluir/:id', function(req, res){
      application.app.controllers.bag.removeBag(application,req,res, req.params.id);
  });

  application.post('/bag/cadastrar', function(req, res){
      application.app.controllers.bag.saveBag(application,req,res);
  });

  application.put('/bag/editar/:id', function(req, res){
      application.app.controllers.bag.editBag(application,req,res);
  });
}
