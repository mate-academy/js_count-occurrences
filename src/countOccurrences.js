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
  const letterLowerCase = letter.toLowerCase();
  const phraseLowerCase = phrase.toLowerCase();
  let count = 0;
  let positionSymbol = 0;
  let foundPosition;

  while (true) {
    foundPosition = phraseLowerCase.indexOf(letterLowerCase, positionSymbol);

    if (foundPosition === -1) {
      break;
    }
    positionSymbol = foundPosition + 1;
    count++;
  }

  return count;
}

module.exports = countOccurrences;
