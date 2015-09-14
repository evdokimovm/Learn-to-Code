/*

Regular expressions are used to find certain words or patterns inside of strings.

For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

Let's break this down a bit:

the is the pattern we want to match.

-g means that we want to search the entire string for this pattern instead of just the first match.

-i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

Regular expressions are written by surrounding the pattern with a / symbol.

*/

var test = (function() {
  var testString = "George Boole and Alan Turing went to the shop and got some milk";
  var expressionToGetMilk = /and/gi;

  var expression = /and/gi;

  // We use this function to show you the value of your variable in your output box.
  return testString.match(expression).length;
})();(function(){return test;})();
