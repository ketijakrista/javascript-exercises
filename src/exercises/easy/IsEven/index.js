/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n) {
  if ((n & 1) == 0) {
    return true;
  }
  return false;
}

//1...000 1...0001...0
//2...001 0...0001...0
//3...001 1...0001...1
//4...010 0...0001...0
//5...010 1...0001...1
//6...011 0...0001...0
//7...011 1...0001...1
//8...100 0...0001...0

module.exports = isEven;
