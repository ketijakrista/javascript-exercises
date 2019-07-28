/**
 * Spiral Matrix
 *
 * Given the size, return a square matrix of numbers in spiral order.
 *
 * The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order, like these examples:
 *
 * Spiral matrix of size 3
 *
 *      1 2 3
 *      8 9 4
 *      7 6 5
 *
 * Spiral matrix of size 4
 *
 *      1  2  3 4
 *      12 13 14 5
 *      11 16 15 6
 *      10  9  8 7
 */

function SpiralMatrix(n) {
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let result = [];

  for (var i = 0; i < n; i++) {
    var secondDimension = [];
    for (var j = 0; j < n; j++) {
      secondDimension.push(0);
    }
    result.push(secondDimension);
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }

    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
}

module.exports = SpiralMatrix;
