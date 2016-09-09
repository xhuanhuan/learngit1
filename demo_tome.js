var i=0;
function timedCount()
{
i=i+1;
postMessage(i);
setTimeout("timedCount()",500);
}
timedCount();

function getDateTime()
{
var d=new Date();
document.getElementById("timePara").innerHTML=d;
}