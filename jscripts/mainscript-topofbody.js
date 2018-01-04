//NoRightClick IE&NS
var message="Pheagey's Fiero";
function click(e)
	{
	if (document.all)
		{
			if (event.button==2||event.button==3)
				{
				alert(message);
				return false;
				}
		}
		if (document.layers)
			{
			if (e.which == 3)
				{
				alert(message);
				return false;
				}
		}
	}
if (document.layers)
	{
	document.captureEvents(Event.MOUSEDOWN);
	}
document.onmousedown=click;
//No Right Click for IE5+
var isie=0;
if(window.navigator.appName=="Microsoft Internet Explorer"&&window.navigator.appVersion.substring(window.navigator.appVersion.indexOf("MSIE")+5,window.navigator.appVersion.indexOf("MSIE")+8)>=5.5)
	{
	isie=1;
	}
else
	{
	isie=0;
	}
	
if(isie)
	{
	var html="";
	html+='<TABLE border="0" width="100%" height="100%" background="pf/imgs/frills/norightclick.gif">';
	html+='<TR><td background="imgs/frills/norightclick.gif"></td></TR>';
	html+='</TABLE>';
	var oPopup = window.createPopup();
	}

function dopopup(x,y)
	{
	if(isie)
		{
		var oPopupBody = oPopup.document.body;
		oPopupBody.innerHTML = html;
		//overall size
		oPopup.show(x, y, 96, 96, document.body); 
		}
	}

function click(e) 
	{
	if(isie)
		{
		if(document.all)
			{
			if(event.button==2||event.button==3)
				{
				dopopup(event.x-48,event.y-48);
				}
			}
		}
	}

if(isie)
	{
	document.oncontextmenu = function() 
		{
		dopopup(event.x,event.y);return false;
		}
	document.onmousedown = click;
	}

