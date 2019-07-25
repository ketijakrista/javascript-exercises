/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
  let num = int
    .toString()
    .replace("-", "")
    .split("")
    .reverse()
    .join("");

  return parseInt(num) * Math.sign(int);
}

module.exports = reverse;
