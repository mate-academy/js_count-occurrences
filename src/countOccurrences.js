'use strict';

/**
 * Implement countOccurrences function:
 *
 * It takes a phrase and a letter and calculates the number of times
 * the letter appears in the phrase. The function is case insensitive.
 *
 * countOccurrences('letter', 't') === 2
 * countOccurrences('abc', 'a') === 1
 * countOccurrences('abc', 'd') === 0
 * countOccurrences('ABC', 'a') === 1
 *
 * @param {string} phrase
 * @param {string} letter
 *
 * @return {number}
 *
 */
function countOccurrences(phrase, letter) {
  let count = 0;
  const string = phrase.toLowerCase();
  const symbol = letter.toLowerCase();
  const length = phrase.length;

  for (let searchPosition = 0; searchPosition < length; searchPosition++) {
    searchPosition = string.indexOf(symbol, searchPosition);
    if (searchPosition >= 0) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}

module.exports = countOccurrences;
