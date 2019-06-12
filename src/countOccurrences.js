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
  let result = 0;
  let pos = -1;
  let normalizePhrase = phrase.toLowerCase();
  let normalizeLetter = letter.toLowerCase();
  while ((pos = normalizePhrase.indexOf(normalizeLetter, pos + 1)) !== -1) {
    result += 1;
  }
  return result;
}

module.exports = countOccurrences;
