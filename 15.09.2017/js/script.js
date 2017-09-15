function fbtntoplam() {
	var ineded1=document.getElementById('eded1');
	var ineded2=document.getElementById('eded2');
	if(ineded1.value=='' || ineded2.value==''){
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Inputlari Bos Buraxma';
		return;
	}
	if(isNaN(ineded1.value)==false && isNaN(ineded2.value)==false){
		var cavab=parseInt(ineded1.value)+parseInt(ineded2.value);
		var neticed=document.getElementById('netice');
		neticed.innerText=cavab;
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Reqem'
	}
	else{
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Text';
	}
}

function fbtncixma() {
	var ineded1=document.getElementById('eded1');
	var ineded2=document.getElementById('eded2');
	if(ineded1.value=='' || ineded2.value==''){
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Inputlari Bos Buraxma';
		return;
	}
	if(isNaN(ineded1.value)==false && isNaN(ineded2.value)==false){
		var cavab=parseInt(ineded1.value)-parseInt(ineded2.value);
		var neticed=document.getElementById('netice');
		neticed.innerText=cavab;
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Reqem';
	}
	else{
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Text';
	}
}

function fbtnvurma() {
	var ineded1=document.getElementById('eded1');
	var ineded2=document.getElementById('eded2');
	if(ineded1.value=='' || ineded2.value==''){
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Inputlari Bos Buraxma';
		return;
	}
	if(isNaN(ineded1.value)==false && isNaN(ineded2.value)==false){
		var cavab=parseInt(ineded1.value)*parseInt(ineded2.value);
		var neticed=document.getElementById('netice');
		neticed.innerText=cavab;
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Reqem'
	}
	else{
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Text';
	}
}

function fbtnbolme() {
	var ineded1=document.getElementById('eded1');
	var ineded2=document.getElementById('eded2');
	if(ineded1.value=='' || ineded2.value==''){
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Inputlari Bos Buraxma';
		return;
	}
	if(isNaN(ineded1.value)==false && isNaN(ineded2.value)==false){
		var cavab=parseInt(ineded1.value)/parseInt(ineded2.value);
		var neticed=document.getElementById('netice');
		neticed.innerText=cavab;
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Reqem';
	}
	else{
		var neticed2=document.getElementById('netice2');
		neticed2.innerText='Text';
	}
}