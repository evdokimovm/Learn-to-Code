var Car = function() {
   this.wheels = 4;
};

var myCar = new Car();

myCar.engines = 1;

(function() {return JSON.stringify(myCar);})();
