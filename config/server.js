const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const createError = require('http-errors');
const expressLayouts = require('express-ejs-layouts');	
const expressValidator = require('express-validator');
const app = express();

app.set('view engine', 'ejs');	
app.set('views', './app/views');	
app.use(expressLayouts);	
app.use(express.static('./app/public'));
app.use(expressValidator());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

consign()
    .include('./app/routes')
    .then('./config/dbconnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

//Tratativa de erros com código 404 (not found)
app.use(function (req, res) {
    res.status('404');
    res.render('errors/error_404', {
        title: 'Error 404'
    });
});


//Tratativa de erros com código 500 (internal server error)
app.use(function (err, req, res) {
    console.log(err.stack);
    res.status(500);
    res.render('errors/error_500', {
        title: 'Error 500'
    });
});

//401 erro de autorização
app.use(function (req, res, next) {
    if (!req.user) return next(createError(401, 'Favor realizar login para visualizar a página.'))
    next()
})

module.exports = app;
