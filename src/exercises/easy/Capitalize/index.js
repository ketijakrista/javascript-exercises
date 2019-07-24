/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
  let myArray = str.split(" ");
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
  }
  return myArray.join(" ");
}

module.exports = capitalize;
