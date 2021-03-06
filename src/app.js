'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

//Carrega os Models
const Usuario = require('./models/usuario');


// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const usuarioRoute = require('./routes/usuario-route');


app.use(bodyParser.json({
    limit: '20mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/usuario', usuarioRoute);




module.exports = app;