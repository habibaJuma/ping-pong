 $(document).ready(function(){
     $("form#myform").submit(function(event){
         event.preventDefault();
 var pingpong =$("input#User").val();

  $("#display").empty(); 

for (var i =1; i<=pingpong;  i++ ) {
    var result = "";
    if(i % 3 !== 0 && i % 5 !== 0) result = (i)
    if (i % 3 === 0) result = "ping";
    if (i % 5 === 0) result += "pong";
    $("p#display").append(result + "<br/>" || i + "<br/>");
   }
  });
});