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
  let indexToCountFrom = 0;
  let count = 0;

  letter.toLowerCase();
  phrase.toLowerCase();
  do {
    indexToCountFrom = phrase.indexOf(letter, indexToCountFrom) + 1;
    if (indexToCountFrom) {
      count++;
    }
  } while (indexToCountFrom);
  return count;
}

module.exports = countOccurrences;
