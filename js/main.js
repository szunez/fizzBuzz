function fizzBuzz(inputValue, fizzValue, buzzValue) {
  //var inputValue = 15; //test value
  //var fizzValue = 3; //test value
  //var buzzValue = 5; //test value
  //
  var outputValue = "";
  var fizzResult = inputValue % fizzValue;
  var buzzResult = inputValue % buzzValue;
  if ( fizzResult == 0){
    var outputValue = "fizz";
  };
  if (buzzResult == 0){
    var outputValue = outputValue + "buzz";
  }else{
    if(outputValue == ""){
      outputValue = inputValue;
    }
  };
  return outputValue;
}