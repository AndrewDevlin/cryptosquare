$(document).ready(function(){
  $("#crypto-form").submit(function(event){
    event.preventDefault();

    var toCode = $("input#user-input").val();


    toCode = toCode.match(/[a-z]|[1-9]/gi);

    $(".output").text(toCode);



  });
});
