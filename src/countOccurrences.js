'use strict';

/**
 * Implement countOccurrences function:
 *
 * Function takes string and letter and calculates how many times letter appears
 * in given string. The function is case insensitive.
 *
 * countOccurrences('letter', 't') === 2
 * countOccurrences('abc', 'a') === 1
 * countOccurrences('abc', 'd') === 0
 * countOccurrences('ABC', 'a') === 1
 *
 * @param {string} phrase
 * @param {string} letter
 *
 * return {number}
 *
 */
function countOccurrences(phrase, letter) {
  let count = 0;
  let phraseToLower = phrase.toLowerCase();
  let letterToLower = letter.toLowerCase();
  for (let i = 0; i < phrase.length; i++) {
    if (phraseToLower[i] === letterToLower) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
