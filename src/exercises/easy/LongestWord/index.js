/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sentence) {
  let myArrayOfWords = sentence.match(/\w[a-z]{0,}/gi);
  let theLongestWord = myArrayOfWords[0];
  for (let i = 1; i < myArrayOfWords.length; i++) {
    if (theLongestWord.length < myArrayOfWords[i].length) {
      theLongestWord = myArrayOfWords[i];
    }
  }

  return theLongestWord;
}

module.exports = longestWord;
