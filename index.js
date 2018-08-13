var express = require('express'),
    path = require('path');
let app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, './public')));
app.set('port', process.env.PORT || 3000);

var server = require("./server");
var conexion = require('./conexion')
server.iniciar(app);
