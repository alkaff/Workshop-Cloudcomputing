var databaseUrl = "localhost/workhsop";
var collections = ["employees"];
var db = require("mongojs").connect(databaseUrl, collections);

exports.SimpanData = function(req, res){
db.employees.save({nama : "a", nim : "b", jurusan : "c"}, function(err, saved){
    if( err || !saved )
    console.log("Pegawai 'Bambang' gagal disimpan");
    else console.log("Data pegawai 'Bambang' tersimpan");
    });
};
