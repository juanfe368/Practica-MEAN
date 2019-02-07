const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var port = 5000;

//Localización de los archivos estaticos
app.use(express.static(__dirname + '/public'));
//Log de los requests
//app.use(express.logger('dev'));
//Permite cambiar el html con el metodo post
//app.use(express.bodyParser());
//Simula delete y put
//app.use(express.methodOverride());

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
})

app.post('/api/book', function (req, res) {
    res.json({
        'msg': 'Llego el mensaje',
        body: req.body
    });
})

app.get('/users', function (req, res) {
    users = {
        name: 'Juan',
        lastname: 'Arias',
        email: 'juantrullo@gmail.com'
    }
    res.json(users);
})

app.listen(port, function () {
    console.log('Start server on port: ' + port);
});