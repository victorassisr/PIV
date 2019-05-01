module.exports = function(application){
    application.get('/empilhadeiras', function(req,res){
        application.app.controllers.empilhadeira.getEmpilhadeiras(application,req,res);
    });

    application.get('/empilhadeira/:id', function(req,res){
        application.app.controllers.empilhadeira.getEmpilhadeira(application,req,res, req.params.id);
    });

    application.delete('/empilhadeira/excluir/:id', function(req,res){
        application.app.controllers.empilhadeira.removeEmpilhadeira(application,req,res, req.params.id);
    });

    application.post('/empilhadeira/cadastrar', function(req,res){
        application.app.controllers.empilhadeira.saveEmpilhadeira(application,req,res);
    });

    application.put('/empilhadeira/editar/:id', function(req,res){
        application.app.controllers.empilhadeira.editEmpilhadeira(application,req,res);
    });
}