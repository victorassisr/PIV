module.exports = function(application){
    
    application.get('/proprietarios', function(req, res){
        application.app.controllers.proprietario.getProprietarios(application, req, res);
    });

    application.get('/proprietario/:id', function(req, res){
        application.app.controllers.proprietario.getProprietario(application, req, res, req.params.id);
    });

    application.delete('/proprietario/excluir/:id', function(req,res){
        application.app.controllers.proprietario.removeProprietario(application,req,res, req.params.id);
    });

    
    application.post('/proprietario/cadastrar', function(req,res){
        application.app.controllers.proprietario.saveProprietario(application,req,res);
    });

    application.put('/proprietario/editar/:id', function(req,res){
        application.app.controllers.proprietario.editProprietario(application,req,res);
    });

}