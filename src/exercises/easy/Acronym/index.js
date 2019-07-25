/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
  input = input.replace(/-/g, " ").replace(/_/g, " ");
  let myArray = input.split(" ");
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].charAt(0).toUpperCase();
  }
  return myArray.join("");
}

module.exports = parse;
