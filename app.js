const app = require('./config/server');
const port = 3000;
app.listen(port, function(){
    console.log("Servidor ON na porta " + port);
});
