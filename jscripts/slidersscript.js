<!--
//starting X
var x =0;
roll = 'true';
function scrollit(destination)
/*step = who many steps*/
	{step = 2; dest = destination; 
		if (x<dest) {
			while (x<dest)			{
			//right moving speed, steps per cyctel
			step += (step / 25);
			x += step;
			scroll(x,0);
			}
		scroll(dest,0);
		x = dest;
		}
	else if (x > dest)
	{
	while (x > dest)
		{
		//left moving speed, steps per cycle
		step += (step / 25);
		if(x >= (0+step))
			{
			x -= step; 
			scroll(x,0);
			}
		else
			{
			break;
			}
		} 
	if(dest >= 0)
		{
		scroll(dest,0);
		}
		x = dest;
	}
if (x<1)
	{
	x=1
	}
/*numbers are totla width of setup*/
if (x>3600)
	{
	x=3600
	}
}
// stop hiding -->
