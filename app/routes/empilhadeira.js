module.exports = function(application){
    application.get('/empilhadeira', function(req,res){
        application.app.controllers.empilhadeira.getEmpilhadeiras(application,req,res);
    });

    application.get('/empilhadeira/:id', function(req,res){
        application.app.controllers.empilhadeira.getEmpilhadeira(application,req,res, req.params.id);
    });

    application.delete('/empilhadeira/:id', function(req,res){
        application.app.controllers.empilhadeira.removeEmpilhadeira(application,req,res, req.params.id);
    });

    application.post('/empilhadeira', function(req,res){
        application.app.controllers.empilhadeira.saveEmpilhadeira(application,req,res);
    });

    application.put('/empilhadeira/:id', function(req,res){
        application.app.controllers.empilhadeira.editEmpilhadeira(application,req,res);
    });
}