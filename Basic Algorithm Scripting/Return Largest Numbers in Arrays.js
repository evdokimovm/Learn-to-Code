function largestOfFour(arr) {  
  return arr.map(function(num) {
    return Math.max.apply(null, num); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#examples
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);