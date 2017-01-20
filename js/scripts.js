
var boxRows = function(array) {
  var dimensions = array.length;
  var dimensions = Math.ceil(Math.sqrt(dimensions));

  if ((dimensions * (dimensions - 1)) >= array.length) {
    dimensions = dimensions - 1;
  }

  return dimensions;
}

var stringContain = function(array, colNum) {
  var tempArry = [];

// Trying to iterate through toCode array fully while only iterating through tempArry's 0-7 indices
  // for (var index = 0; index < colNum; index += 1) {
  //   for (var x = 0; x < array.length; x += 1) {
  //     tempArry[index] = array.append[index];
  //   }
  // }
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
