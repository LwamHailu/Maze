
"use strict"

 (function(){
    var startGame=false;
    function lose(){
          if(startGame){
            alert("Sorry, you lost! :[");  
            $("#status").text("Sorry, you lost! :[");
			$(".boundary").addClass("youlose");
			 
			startGame = false;
            
		}

    }
    $(function(){/// short cut mean $(document).ready(function(){});
   $("#start").click(function(){
     startGame=true;
     $("#status").text("Game Started!");
     $(".boundary").removeClass("youlose");
    
 });

 $(".boundary").mouseover(function(){
     if(startGame){
        
         lose();
       

  }
 });

    $("#end").click(function(){
        if(startGame){
           startGame=false; 
       alert("You win!:]");
    $("#status").text("You win!:]");}
});
$("#maze").mouseleave(function(){
			if(startGame){
				lose();
				$(".boundary").addClass("Cheater");
				alert("Cheater! :[");
			}	
		});
    });

}());


