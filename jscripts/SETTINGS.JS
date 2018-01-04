function openIT(theURL,titWIN,wname,W,H,X,Y )
	{
	CLOSEdwn 			= "imgs/titlebarimgs/close_dwn.gif"
	CLOSEup 			= "imgs/titlebarimgs/close_up.gif"
	CLOSEovr 			= "imgs/titlebarimgs/close_ovr.gif"
	MINIdwn 			= "imgs/titlebarimgs/mini_dwn.gif"
	MINIup 				= "imgs/titlebarimgs/mini_up.gif"
	MINIovr 			= "imgs/titlebarimgs/mini_ovr.gif"
	NONEgrf 			= "imgs/titlebarimgs/none.gif"
	CLOCKgrf			= "imgs/titlebarimgs/clock.gif"
	titHTML 	    	= "<p align='center'><font color='#ffffff' size='3'>Pheagey's Fiero</font></p>"
	titWIN				= "«Pheagey's Fiero»&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"
	winBORDERCOLOR   	= "#0000ff"
	winBORDERCOLORsel	= "#ffffff"
	winBGCOLOR    		= "#0000ff"
	winBGCOLORsel 		= "#0000ff"
	return openchromeless(theURL, wname, W, H, X, Y, NONEgrf, CLOSEdwn, CLOSEup, CLOSEovr, MINIdwn, MINIup, MINIovr, CLOCKgrf, titHTML, titWIN, winBORDERCOLOR, winBORDERCOLORsel, winBGCOLOR, winBGCOLORsel)
	}
