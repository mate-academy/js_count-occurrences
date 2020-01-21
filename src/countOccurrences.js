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
  const normalizePhrase = phrase.toLowerCase();
  const normalizeLetter = letter.toLowerCase();
  let result = 0;

  for (const symbol of normalizePhrase) {
    if (symbol === normalizeLetter) {
      result += 1;
    }
  }

  return result;
}

module.exports = countOccurrences;
