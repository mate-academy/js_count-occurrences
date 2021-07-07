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
  // write code here
  const phraseLowerCase = phrase.toLowerCase();
  const letterLowerCase = letter.toLowerCase();
  let number = 0;

  for (const currentLetter of phraseLowerCase) {
    if (currentLetter === letterLowerCase) {
      number += 1;
    }
  }

  return number;
}

module.exports = countOccurrences;
