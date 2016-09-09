function changeHtml()//改变html内容
{
x=document.getElementById("demo1");
x.innerHTML="hello Javascript!!";
}

function changeImg()//改变图片
{
x=document.getElementById("img1");
if(x.src.match("3")){
x.src="d://娱乐/图片/2.jpg";
}
else{
x.src="d://娱乐/图片/3.jpg";
}
}

function changeStyle()//改变样式
{
x=document.getElementById("style1");
if(x.style.color=="yellow"){
x.style.color="red";
}
else{
x.style.color="yellow";
}
}

function checkIn()//检查输入信息
{
x=document.getElementById("demo2").value;
if(isNaN(x)||x==""||x[0]==" "){
document.getElementById("demo3").innerHTML="Not numeric!</p>";
}
else{
document.getElementById("demo3").innerHTML="yes,your input number is: "+x;
}
}

function welcomejob(name,job)//改变样式
{
alert("welcome "+name+",the "+job);
}

function jisuan()//乘法
{
	var a=parseInt(document.getElementById("a").value);
	var b=parseInt(document.getElementById("b").value);
	var y=document.getElementById("y").value;
	switch(y){
		case'+':document.getElementById("demo4").innerHTML=a+b;break;
		case'-':document.getElementById("demo4").innerHTML=a-b;break;
		case'*':document.getElementById("demo4").innerHTML=a*b;break;
		case'/':document.getElementById("demo4").innerHTML=a/b;break;
	    case'%':document.getElementById("demo4").innerHTML=a%b;break;
		default:document.getElementById("demo4").innerHTML="wrong!";
	}
}
 function ifelse()
 {
	 var time=new Date().getHours();//getday()星期几0~6：sunday~saturday
	 if(time<22)
		 x="continue work!";
	 else x="good evening!";
	 document.getElementById("demo5").innerHTML=x;
 }

function fortest(){
	var x="";
	for(var i=0;i<5;i++){
		x=x+"the number is "+i+"<br>";
	}
	document.getElementById("demo6").innerHTML=x;
}

function forintest(){
	var person={firstname:"tang",lastname:"huan",id:3212};
	var txt="";
	for(var x in person){
		txt=txt+person[x];
	}
	document.getElementById("demo6").innerHTML=txt;	
}


function showerror(){
	try{
		var x=document.getElementById("error").value;
		if(x=="") 
			throw "值为空";
		else if(isNaN(x)||x[0]==" ") 
			throw "不是数字";
		else if(x>100) 
			throw "值太大";
		else if(x<5) 
			throw "值太小";
		else document.getElementById("mess").innerHTML="you are right";
	}
	catch(err){
		document.getElementById("mess").innerHTML="错误："+err;
		}
}


function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@")
dotpos=value.lastIndexOf(".")
if (apos<1||dotpos-apos<2) 
  {alert(alerttxt);return false}
else {return true}
}
}

function validate_form(thisform)
{
with (thisform)
{
if (validate_email(email,"Not a valid e-mail address!")==false)
  {email.focus();return false}
}
}

function uppercase(){
	var x=document.getElementById("uppercase");
	x.value=x.value.toUpperCase();
}

function mOver(id){
	id.innerHTML="谢谢";
}
function mOut(id){
	id.innerHTML="把鼠标移到上面";
}

function mdown(id){
	id.style.backgroundColor="#1ec5e5";
	id.innerHTML="请释放按钮";
}
function mup(id){	
    id.innerHTML="谢谢";
	id.style.backgroundColor="green";
}

function people(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;//添加属性
	
	this.changeName=changeName;//添加方法
	function changeName(name){
		this.lastname=name;
	}
	this.changeAge=changeAge;//添加方法
	function changeAge(age){
		this.age=age;
	}
}

function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById("time").innerHTML=h+":"+m+":"+s;
	setTimeout('startTime()',500);
}
function checkTime(i){
	if(i<10){i="0"+i;}
	return i;
}