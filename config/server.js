const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const expressValidator = require('express-validator');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(expressLayouts);
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(expressValidator());
app.use(morgan('dev'));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
