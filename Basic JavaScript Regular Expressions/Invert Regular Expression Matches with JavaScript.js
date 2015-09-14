/*

Use /\S/gi to match everything that isn't a space in the string.

You can invert any match by using the uppercase version of the selector \s versus \S for example.

*/

var test = (function(){
  var testString = "How many non-space characters are there in this sentence?";


  var expression = /\S/gi; // find all not space symbols in testString

  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();
