$(document).ready(function(){
    $(".nav").click(function(){

      let filename= $(this).text(); 
      if(filename=="Navbar")
        	$(this).attr("href","index.html");
     else
           $(this).attr("href",filename+".html");
        
      });

    


});