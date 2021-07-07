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
  let letterSameCase = letter.toLowerCase();
  let phraseSameCase = phrase.toLowerCase();
  let numberEntries = 0;
  let positionSimbol = 0;
  while (phraseSameCase.indexOf(letterSameCase, positionSimbol) !== -1) {
    let foundPos = phraseSameCase.indexOf(letterSameCase, positionSimbol);
    positionSimbol = foundPos + 1;
    numberEntries++;
  }
  return numberEntries;
}

module.exports = countOccurrences;
