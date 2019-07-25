/**
 * Second Largest
 *
 * array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array) {
  let firstLargest = 0;
  let secondLargest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = array[i];
    } else if (array[i] > secondLargest && array[i] < firstLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

module.exports = secondLargest;
