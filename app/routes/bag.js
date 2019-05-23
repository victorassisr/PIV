module.exports = function(application){
    application.get('/bag',function(req,res){
       application.app.controllers.bag.formulario_inclusao_bag(application, req, res);
    });
    application.post('/bag/salvar', function(req, res){
       application.app.controllers.bag.salvar_bag(application, req, res);
    })
    application.get('/bags',function(req,res){
      application.app.controllers.bag.obter_bags(application, req, res);
   });
}