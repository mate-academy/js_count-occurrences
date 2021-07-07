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
countOccurrences('addd', 'df');
function countOccurrences(phrase, letter) {
  let count = 0;
  const phraseLower = phrase.toLowerCase();
  const phraseLength = phraseLower.length;
  for (let i = 0; i < phraseLength; i++) {
    if (phraseLower[i] === letter) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
