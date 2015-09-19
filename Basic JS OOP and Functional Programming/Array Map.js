var array = [1,2,3,4,5];

array = array.map(function(val){

  return val+3;

});

(function() {return array;})();