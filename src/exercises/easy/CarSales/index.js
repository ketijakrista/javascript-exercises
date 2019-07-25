/**
 * Car Sales
 *
 * Array of car sales information object is passed, your task is to calculate total sales for each of the make.
 *
 * Car sales information is an object with the following properties:
 *
 *  - make
 *  - model
 *  - colour
 *  - price
 */

function sales(carsSold) {
  let total = {};
  for (let i in carsSold) {
    let car = carsSold[i];
    if (total[car.make] == undefined) {
      total[car.make] = 0;
    }
    total[car.make] = total[car.make] + car.price;
  }
  return total;
}

module.exports = sales;
