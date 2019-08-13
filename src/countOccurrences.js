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
  let countLetter = 0;
  let startPossition = 0;
  let foundPossition;

  while (true) {
    foundPossition
    = phrase.toLowerCase().indexOf(letter.toLowerCase(), startPossition);

    if (foundPossition === -1) {
      break;
    }

    countLetter++;
    startPossition = foundPossition + 1;
  }

  return countLetter;
}

module.exports = countOccurrences;
