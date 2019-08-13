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
  let sumWordCoincidence = 0;
  let tempStr = '';
  if (letter.toLowerCase() === letter) {
    tempStr = phrase.toLowerCase();
  } else {
    tempStr = phrase.toUpperCase();
  }
  for (const char of tempStr) {
    if (char === letter) {
      sumWordCoincidence++;
    }
  }
  return sumWordCoincidence;
}

module.exports = countOccurrences;
