var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var FuelGauge = /** @class */ (function() {
  function FuelGauge(amount) {
    this.amount = amount;
    //this.amount = amount;
  }
  FuelGauge.prototype.decrease = function(amount) {
    if (this.amount > FuelGauge.minAmount) {
      this.amount = this.amount - amount;
    } else {
      throw new ArgumentError("Not enough fuel");
    }
  };
  FuelGauge.prototype.increase = function(amount) {
    if (this.amount < FuelGauge.maxAmount) {
      this.amount = this.amount + amount;
    } else {
      throw new ArgumentError("Too much fuel");
    }
  };
  FuelGauge.prototype.report = function() {
    console.log("There are " + this.amount + "L of fuel in the tank");
  };
  FuelGauge.minAmount = 0;
  FuelGauge.maxAmount = 70;
  return FuelGauge;
})();
var Odometer = /** @class */ (function() {
  function Odometer(mileage, fuelGauge) {
    this.mileage = mileage;
    this.fuelGauge = fuelGauge;
    this.mileage = mileage;
    this.fuelGauge = fuelGauge;
  }
  Odometer.prototype.report = function() {
    console.log("Current mileage is " + this.mileage + "km");
  };
  Odometer.prototype.increase = function() {
    if (this.mileage < Odometer.maxMileage) {
      this.mileage++;
      if (this.mileage % 10 === 0) {
        this.fuelGauge.decrease(1);
      }
    } else {
      this.mileage = 0;
    }
  };
  Odometer.minMileage = 0;
  Odometer.maxMileage = 999999;
  return Odometer;
})();
var ArgumentError = /** @class */ (function(_super) {
  __extends(ArgumentError, _super);
  function ArgumentError(message) {
    var _this = _super.call(this, message) || this;
    _this.name = "ArgumentError";
    return _this;
  }
  return ArgumentError;
})(Error);
module.exports.FuelGauge = FuelGauge;
module.exports.Odometer = Odometer;
