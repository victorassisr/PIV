module.exports.listarTodas = function(application,req,res){
	//requisitar do DAO as info do banco utilizando as models
	//Após recuperar as info, controller fornecer ao user, já q n temos views.
    res.send({empilhadeiras : "ListarTodas" });
}

module.exports.listar = function(application, req, res, id){
	res.send({empilhadeira : "listar uma id: " + id});
}