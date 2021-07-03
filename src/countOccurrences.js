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
  let letterCounter = 0;
  const lowerCasePhrase = phrase.toLowerCase();

  for (let i = 0; i < phrase.length; i++) {
    if (lowerCasePhrase[i] === letter) {
      letterCounter += 1;
    }
  }

  return letterCounter;
}

module.exports = countOccurrences;
