class FuelGauge {
    static minAmount=0;
    static maxAmount=70;
    constructor(private amount:number) {
    }
    decrease(amount:number) {
      if (this.amount >FuelGauge.minAmount) {
        this.amount= this.amount -amount;
      }
      else {
        throw new ArgumentError("Not enough fuel")
        
      } 
      
    }
    increase(amount:number) { 
      if(this.amount <FuelGauge.maxAmount) {
        this.amount = this.amount + amount;
      }
      else {
        throw new ArgumentError("Too much fuel")
        
        
      }       
    }
    report() {
      console.log("There are "+ this.amount + "L of fuel in the tank");
    }
  }
  
 
  
  class Odometer {
    static minMileage = 0;
    static maxMileage = 999999;
    constructor(private mileage:number,private fuelGauge:FuelGauge) {
      this.mileage = mileage;
      this.fuelGauge = fuelGauge;
    }
    report() {
      console.log("Current mileage is "+this.mileage+ "km");
    }
    increase() {
    if (this.mileage < Odometer.maxMileage) {
      this.mileage++;
      if ( this.mileage%10 === 0) {
        this.fuelGauge.decrease(1);    
      }
    }
    else {
      this.mileage = 0;
    } 
   
  }}

  class ArgumentError extends Error {
    constructor(message:string) {
      super(message);
      this.name = "ArgumentError";
    }
  }
  
  module.exports.FuelGauge = FuelGauge;
  module.exports.Odometer = Odometer;