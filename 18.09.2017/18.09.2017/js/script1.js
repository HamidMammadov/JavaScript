var mydivelement=document.getElementById('myDiv');

var _html='';

for (var i = 0; i < 9; i++) {
	_html+='<div class="box" style="float: left; margin:5px; border:1px solid black; width:100px; height:100px;"></div>';
}

mydivelement.innerHTML+=_html;

/*var divelement=document.createElement('div');
var divtag=document.createeleme*/