/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
  const charObj = {};
  let maxCount = 0;
  let maxChar = "";

  //Counting each character and storing in object
  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }

  //Finding the most used character
  for (let char in charObj) {
    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
