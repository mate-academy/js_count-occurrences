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
  const line = phrase.toLowerCase();
  let position = 0;
  let result = 0;
  while (true) {
    const foundPosition = line.indexOf(letter, position);
    if (foundPosition === -1) {
      break;
    }
    result += 1;
    position = foundPosition + 1;
  }
  return result;
}

module.exports = countOccurrences;
