function Simpan(){
	alert(document.getElementById("nama").value);
	alert(document.getElementById("nim").value);
    });}

script(src="/javascripts/socket.io.js")
script
	function Simpan(){
	var socket = io.connect('http://localhost');
	socket.emit('Simpan Data', {
	nama : document.getElementById("nama").value,
	address : document.getElementById("address").value});
	};
