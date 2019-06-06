module.exports = function(application){
   application.get('/proprietarioForm', function(req, res){
      application.app.controllers.proprietario.formProprietario(application, req, res);
   })

     application.post('/proprietario/salvar', function(req, res) {
        application.app.controllers.proprietario.proprietario_salvar(application, req, res);
})
    application.get('/proprietarios', function(req, res){
         application.app.controllers.proprietario.getProprietarios(application, req, res);
      })
}