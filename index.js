var express = require('express');
var socket = require('socket.io');
var path = require('path'); 

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

var server = app.listen(5000, function () {
    console.log("Servidor activo en el puerto 5000");
});
