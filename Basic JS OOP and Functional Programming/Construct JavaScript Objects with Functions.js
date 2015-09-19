var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();

var MotorBike = function() {
  this.wheels = 2,
  this.engines = 1,
  this.seats = 1
};
var myMotorBike = new MotorBike();

(function() {return JSON.stringify(myMotorBike);})();
