// jQuery


// Generate random haiku upon button click
$(document).ready(function(){

  $("#generate-button").click(function(){
    // console.log("Button clicked!");
      $.ajax({url: "/haiku", success: function(result){
        // console.log("Result:", result);
        $("#generated-haiku").html('<pre>'+result+'</pre>');
      }});
  });

});
