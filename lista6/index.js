var express = require('express');
var contatos = require('./contatos/models/contatos');

var app = express();

app.use(express.static('./public'));

app.get('/contatos', function(req, res) {
    res.json(contatos);
});

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(3000);