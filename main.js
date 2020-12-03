
function compute()
{
var n=document.getElementById('num').value;

if(tempc.checked==true)
{
	var t=(n*5-160)/9;
	document.getElementById("display").innerHTML=t +" &deg;C";
}
else if(tempf.checked==true)
{
	var t=(n*9+160)/5;
	document.getElementById("display").innerHTML=t +" &deg;F";
}
else
{
	document.getElementById("display").innerHTML="Select a Unit";
}
return false;
}