/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , save = require('./routes/save')
  , http = require('http')
  , path = require('path')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

var databaseUrl = "localhost/workshop";
var collections = ["employees"];
var db = require("mongojs").connect(databaseUrl, collections);
var app = express();

server.listen(8080);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/', save.SimpanData);

io.sockets.on('connection', function (socket) {
     socket.on('Simpan Data', function (dataWorkshop) {
        db.employees.save({nama : "Doni", nim : "105210113", jurusan : "Manajemen Informatika"}, function(err, saved) {
          if( err || !saved ) 
          console.log("Data Mahasiswa gagal disimpan");
          else console.log("Data Mahasiswa tersimpan");
          });
     });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
