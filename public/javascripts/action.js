$(document).ready(function(){
			 $(".bAdd").click(function(){
			  $("#table_container").hide("slow");
			  $("#form_container").show("slow");
			 });
			 $("#save").click(function(){
			  if($(this).val()=="Simpan"){
				  var j = parseInt($('#customers').attr('jumbar'))+1; 
				  $('#customers').attr('jumbar',j);
				  $('#customers').append('<tr id="'+j+'"><td id="nama'+j+'">Dzaky</td><td><table class="inside"><tr><td id="tgl'+j+'">28  </td><td id="bln'+j+'">April </td><td id="thn'+j+'">1992</td></tr></table></td><td id="almt'+j+'">Kebumen</td><td id="kel'+j+'">Laki-Laki</td><td id="jur'+j+'">Teknik Informatika</td><td> <input id="'+j+'" type="button" value="Ubah" class="bEdit button"/><input id="'+j+'" type="button" value="Hapus" class="bDel button"/></td></tr>');
				  }
			  else {
				  $("#nama"+$(this).attr("x")).text($("#element_2").val());//Nama
				  $("#tgl"+$(this).attr("x")).text($("#element_5_1").val());//Tgl
				  $("#bln"+$(this).attr("x")).text($("#element_5_2").val());//Bulan Lahir
				  $("#thn"+$(this).attr("x")).text($("#element_5_3").val());//Tahun Lahir
				  $(":radio"+$(this).attr("x")).text($("#element_5_3").val());//Jenis Kelamin
				  $("#almt"+$(this).attr("x")).text($("#element_3").val());//Alamat
				  $("#jur"+$(this).attr("x")).text($("#element_6").val());//Jurusan
				}
			  //
			  $("#table_container").show("slow");
			  $("#form_container").hide("slow");
			  });
			 $(".bDel").click(function(){
			  removeItem($(this).attr("id"));
			  alert("Hapus data?");
			  });
			 $(".bEdit").click(function(){
			  $("#save").val("Perbarui");
			  $("#save").attr("x", $(this).attr("id"));
			  $("#element_2").val($("#nama"+$(this).attr("id")).text());//Nama
			  $("#element_5_1").val($("#tgl"+$(this).attr("id")).text());//Tgl
			  $("#element_5_2").val($("#bln"+$(this).attr("id")).text());//Bulan Lahir
			  $("#element_5_3").val($("#thn"+$(this).attr("id")).text());//Tahun Lahir
			  //alert($("#kel"+$(this).attr("id")).text());
			  if($("#kel"+$(this).attr("id")).text()=="Laki-Laki"){
				  $("#elemen_4_1").attr("checked", "");
				  }
			  else{
				  $("#elemen_4_2").attr("checked", "");}
			  $("#element_3").val($("#almt"+$(this).attr("id")).text());//Alamat
			  $("#element_6").val($("#jur"+$(this).attr("id")).text());//Jurusan
			  
			  $("#table_container").hide("slow");
			  $("#form_container").show("slow");
			 });
			 $("#cancel").click(function(){
			  $("#table_container").show("slow");
			  $("#form_container").hide("slow");
			 });
			 
			 
});
