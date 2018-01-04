/*---------------[IE 5.5 Scrollbars colorer]--------------------*/
function scrollBar(line,face,theme)
	{
		if (!line||!face)
			{
				line=null;
				face=null;
				switch(theme) // Predefined themes
					{
						case "pf":
						 	var line="#0000ff";
							var face="#ffffff";
							break;
					}
			}
				with(document.body.style)
					{
						scrollbarDarkShadowColor=line;
						scrollbar3dLightColor=line;
						scrollbarArrowColor="#0000ff";
						scrollbarBaseColor=face;
						scrollbarFaceColor=face;
						scrollbarHighlightColor=face;
						scrollbarShadowColor=face;
						scrollbarTrackColor="#ffffff";
					}
			}

/*------------------[Pointer coordinates catcher]---------------*/
function colorBar()
	{
		var w = document.body.clientWidth;
		var h = document.body.clientHeight;
		var x = event.clientX;
		var y = event.clientY;
		if(x>w) scrollBar('#0000ff','#ffffff'); // Your colors
		else scrollBar(null,null,"pf"); // A predefined theme
	}

if (document.all)
	{
		scrollBar(null,null,"pf");
		document.onmousemove=colorBar;
	}
