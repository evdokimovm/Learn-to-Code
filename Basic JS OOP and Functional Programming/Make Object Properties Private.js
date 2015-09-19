var Car = function() {
  this.gear = 1;
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
  this.getGear = function() {
    return addStyle(this.gear);
  };
};

var Bike = function() {

  this.speed = 100;
  function addUnit(value) {
    return value + "KM/H";
  }
  
  getSpeed = function () {
    return addUnit(speed);
  };
  
};


var myCar = new Car();
var myBike = new Bike();

if (myBike.hasOwnProperty('getSpeed')) {
    (function() {
        return JSON.stringify(myBike.getSpeed());
    })();
};


///////////////////////// CHALLENGE /////////////////////////////////

// The method getSpeed of myBike should be accessible outside the object

// myBike.speed should remain undefined

/////////////////////////// REALIZATION ///////////////////////////////


// 12 to 23
var Bike = function() {
  speed = 100;
  function addUnit(value) {
    return value + "KM/H";
  }
  
  this.getSpeed = function () {
    return addUnit(speed);
  };
};
