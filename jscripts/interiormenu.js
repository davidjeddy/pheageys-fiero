var offsetleft=405
var offsettop=50

var ns4=document.layers?1:0
var ie4=document.all?1:0
var ns6=document.getElementById&&!document.all?1:0

function makeStatic()
{
	if (ie4)
		{
		object1.style.pixelTop=document.body.scrollTop+offsettop
		}
	else if (ns6)
		{
		document.getElementById("object1").style.top=window.pageYOffset+offsettop
		}
	else if (ns4)
		{
		eval(document.object1.top=eval(window.pageYOffset+offsettop));
		}
setTimeout("makeStatic()",0);
}

if (ie4||ns6) {
/*table setup - Menu title TD setup*/
/*object, Destination Opacity, rate, delta*/
document.write('\
\
<span align="center" id="object1" class="interiormenu" onmouseover="nereidFade(this,100,100,25)" onmouseout="nereidFade(this,15,100,25)">\
\
<TABLE BORDER="1" bordercolor="#000000" width="100" CELLPADDING="3" CELLSPACING="0"\
background="imgs/frills/menutablebkg.jpg"\
backgroundcolor="#dfdfff"\
onMouseover="over_effect(event,\'outset\')"\
onMouseout="over_effect(event,\'solid\')"\
onMousedown="over_effect(event,\'inset\')"\
onMouseup="over_effect(event,\'outset\')">\
\
<TR>\
<TD align="center" valign="middle">\
<FONT style="background:  url(../imgs/bkgs/interior-bkg.jpg); color: #ffffff; font: bolder 10pt verdana; text-decoration: none">***Menu***</font>\
</TD>\
</TR>\
\
<tr>\
<TD align="center" valign="middle" class="interiormenutd">\
<a href="#top" style="background:  url(../imgs/frills/menutablebkg.jpg); color: #ffffff; font: bolder 8pt verdana; text-decoration: none">&#160;&#160;&#160;&#160;&#160;&#160;&#160;^Top^&#160;&#160;&#160;&#160;&#160;&#160;</a><br>\
</TD>\
</TR>\
\<!--\
<tr>\
<TD align="center" valign="middle" class="interiormenutd">\
<a href="#added" style="background:  url(../imgs/bkgs/interior-bkg.jpg); color: #ffffff; font: bolder 8pt verdana; text-decoration: none">&#160;&#160;&#160;&#160;&#160;+Added+&#160;&#160;&#160;&#160;</a><br>\
</TD>\
</TR>\
\
<tr>\
<TD align="center" valign="middle" class="interiormenutd">\
<a href="#replaced" style="background:  url(../imgs/bkgs/interior-bkg.jpg); color: #ffffff; font: bolder 8pt verdana; text-decoration: none">&#160;&#160;}Replaced{&#160;&#160;</a><br>\
</TD>\
</TR>\
-->\
<tr>\
<TD align="center" valign="middle" class="interiormenutd">\
<a href="#fixed" style="background:  url(../imgs/bkgs/interior-bkg.jpg); color: #ffffff; font: bolder 8pt verdana; text-decoration: none">&#160;&#160;&#160;&#160;&#160;~Fixed-&#160;&#160;&#160;&#160;&#160;</a><br>\
</TD>\
</TR>\
\
</table>\
\
</span>\
')}


/*run static function*/
function menu3()
	{
	if (ns6||ie4||ns4)
	makeStatic()
	}
/*Load it all on screen*/
window.onload=menu3

//-->
