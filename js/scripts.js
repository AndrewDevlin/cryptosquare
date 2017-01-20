
var boxRows = function(array) {
  var dimensions = array.length;
  var dimensions = Math.ceil(Math.sqrt(dimensions));

  if ((dimensions * (dimensions - 1)) >= array.length) {
    dimensions = dimensions - 1;
  }

  return dimensions;
}

$(document).ready(function(){
  $("#crypto-form").submit(function(event){
    event.preventDefault();

    var toCode = $("input#user-input").val();

    toCode = toCode.match(/[a-z]|[1-9]/gi);

    var columns = boxRows(toCode);

    $(".output").text(toCode);

    alert(columns);


  });
});
