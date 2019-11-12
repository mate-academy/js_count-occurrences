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
  let letterSum = 0;
  const normalizedPhrase = phrase.toLowerCase();
  const normalizedLetter = letter.toLowerCase();

  for (let i = 0; i < normalizedPhrase.length; i++) {
    if (normalizedPhrase[i] === normalizedLetter) {
      letterSum++;
    }
  }

  return letterSum;
}

module.exports = countOccurrences;
