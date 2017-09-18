var listarr=[];

function list() {
	var inputad=document.getElementById('inputad').value;
	var inputsoyad=document.getElementById('inputsoyad').value;
	var inputqrup=document.getElementById('inputqrup').value;
	var inputyas=document.getElementById('inputyas').value;
	var listobj={};
	listobj.name=inputad;
	listobj.surname=inputsoyad;
	listobj.group=inputqrup;
	listobj.age=inputyas;
	listarr.push(listobj);
	console.log(listarr);
	return listarr;
}

function btnreset() {
	document.getElementById('frm1').reset();
}