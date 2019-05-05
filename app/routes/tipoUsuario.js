module.exports = function(application){
    application.get('/tipoUsuario', function(req,res){
        application.app.controllers.tipoUsuario.getTiposUsuarios(application,req,res);
    });

    application.get('/tipoUsuario/:id', function(req,res){
        application.app.controllers.tipoUsuario.getTipoUsuario(application,req,res, req.params.id);
    });

    application.delete('/tipoUsuario/:id', function(req,res){
        application.app.controllers.tipoUsuario.removeTipoUsuario(application,req,res, req.params.id);
    });

    application.post('/tipoUsuario', function(req,res){
        application.app.controllers.tipoUsuario.saveTipoUsuario(application,req,res);
    });

    application.put('/tipoUsuario/:id', function(req,res){
        application.app.controllers.tipoUsuario.editTipoUsuario(application,req,res);
    });
}