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
  const letterLowered = letter.toLowerCase();
  const phraseLowered = phrase.toLowerCase();

  for (let letterIndex = 0; letterIndex < phrase.length; letterIndex++) {
    letterIndex = phraseLowered.indexOf(letterLowered, letterIndex);
    if (letterIndex === -1) {
      return count;
    }
    count++;
  }
  return count;
}

module.exports = countOccurrences;
