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
  let positionSimbol = 0;

  while (phraseLowerCase.indexOf(letterLowerCase, positionSimbol) !== -1) {
    const foundPos = phraseLowerCase.indexOf(letterLowerCase, positionSimbol);

    positionSimbol = foundPos + 1;
    count++;
  }

  return count;
}

module.exports = countOccurrences;
