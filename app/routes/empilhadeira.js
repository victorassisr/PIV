module.exports = function(application){
    application.get('/empilhadeiras', function(req,res){
        application.app.controllers.empilhadeira.listarTodas(application,req,res);
    });

    application.get('/empilhadeira/:id', function(req,res){
        application.app.controllers.empilhadeira.listar(application,req,res, req.params.id);
    });
}