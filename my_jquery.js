$(document).ready(function(){
  $("button#button1").click(function(){
  $(this).hide();
  });
  
 $("button#button2").click(function(){
    $("#test").hide();
  });
  
   /*$("p").click(function(){
    $(this).hide();
  });*/
  
  $("button#button3").click(function()
  {
  $(".test").hide();
  });
  
  $("button.button4").click(function(){
  $("p.test_css").css("background-color","red");
  });
  
  $("button.button5").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
  
  $(".flip").click(function(){
    $(".panel").slideDown(2000).slideUp(2000);
  });
  
   $("#stop").click(function(){
    $(".panel").stop();
  });
  

  $("button.button6").click(function(){
    var div=$("div.ani");  
    div.animate({top:'250px',height:'250px',fontSize:'4em',opacity:'0.4'},"slow");
    div.animate({left:'250px',width:'250px',opacity:'0.8'},"slow");
    div.animate({top:'0px',height:'100px',fontSize:'1em',opacity:'0.4'},"slow");
    div.animate({left:'0px',width:'100px',opacity:'0.8'},"slow");
  });

  $("button.button7").click(function(){
  $("p.hide").hide(1000,function(){
    alert("The paragraph is now hidden");
    });
  });
  
  $("button.button8").click(function(){
    $("#p1").css("color","red")
      .slideUp(2000)
      .slideDown(2000);
  });
  
  $("#btn1").click(function(){
    alert("Text: " + $("#test_get").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test_get").html());
  });
  
  $("button.button9").click(function(){
    alert("Value: " + $("#test_val").val());
  });
  
   $(".button10").click(function(){
    $(".test1").text(function(i,origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i+ ")"; 
    });
  });
  $(".button11").click(function(){
    $("#test2").html(function(i,origText){
      return "Old text: " + origText + " New text: Hello <b>world</b>! (index: " + i + ")"; 
    });
  });
  $(".button12").click(function(){
    $("#test3").val("Dolly Duck");
  });
  
  $("button.button13").click(function(){
     $("#w3s").attr({
      "title" : "W3School jQuery 教程"
    });
	$("#w3s").attr("href", function(i,origValue){
      return origValue + "/jquery"; 
    });
  });
  
  $("button.button14").click(function(){
     $(".apd1").append("<b>appended text</b>");
	$(".apd2").prepend("<b>appended text </b>");
  });
   $("button.button15").click(function(){
     $(".apd_ul").append("<li><b>appended text</b></li>");
  });
  
  $("button.button16").click(function(){
    $("#div4").empty();
  });
   $("button.button17").click(function(){
    $("#div4").remove();
  });
  
  $("button.button18").click(function(){
    $("h1,h2,p").addClass("blue");
    $("div.div5").addClass("important");
  });
    $("button.button19").click(function(){
    $("h1,h2,p").removeClass("blue");
    $("div.div5").removeClass("important");
  });
   $("button.button20").click(function(){
    $("h1,h2,p").toggleClass("blue");
    $("div.div5").toggleClass("important");
  });
  
   $("button.button21").click(function(){
    $("p").css({"background-color":"yellow","font-size":"200%"});
  });
  
  $("button.button22").click(function(){
    var txt="";
    txt+="Width of div: " + $("#div6").width() + "</br>";
    txt+="Height of div: " + $("#div6").height()+ "</br>";
	txt+="Inner width of div: " + $("#div6").innerWidth() + "</br>";
    txt+="Inner height of div: " + $("#div6").innerHeight()+ "</br>";
	txt+="Outer width of div: " + $("#div6").outerWidth() + "</br>";
    txt+="Outer height of div: " + $("#div6").outerHeight()+ "</br>";
	txt+="Outer width of div (margin included): " + $("#div6").outerWidth(true) + "</br>";
    txt+="Outer height of div (margin included): " + $("#div6").outerHeight(true);
    $("#div6").html(txt);
	$("#div6").width(320).height(320);
  });
  
  $("button.parentsUntil").click(function(){
  $("span").parentsUntil("div").css({"color":"red","border":"2px solid red"})
  });
  $("button.parents").click(function(){
  $("span").parents("ul").css({"color":"green","border":"2px solid green"});
  })
  $("button.parent").click(function(){
  $("span").parent().css({"color":"blue","border":"2px solid blue"});
  })
   $("button.children").click(function(){
  $("div").children(".1").css({"color":"yellow","border":"2px solid yellow"});
  })
   $("button.find").click(function(){
  $("div").find("span").css({"color":"pink","border":"2px solid pink"});
  })
  
  $("button.load2").click(function(){
    $("#load1").load("/new1.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功！");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
  })
  
});