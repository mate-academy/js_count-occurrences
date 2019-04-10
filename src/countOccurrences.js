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
  // write code here
  let quantityLetter = 0;
  const lett = letter.toLowerCase();
  const phr = phrase.toLowerCase();
  for (let i = 0; i < phr.length; i++) {
    if (lett === phr[i]) {
      quantityLetter += 1;
    }
  }
  return quantityLetter;
}

module.exports = countOccurrences;
