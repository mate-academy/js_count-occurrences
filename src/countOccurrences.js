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
  const phraseLower = phrase.toLowerCase();
  const letterLower = letter.toLowerCase();
  const pharseArr = phraseLower.split('');
  let timesOfAppears = 0;

  for (let i = 0; i < pharseArr.length; i++) {
    if (phraseLower[i] === letterLower) {
      timesOfAppears++;
    }
  }

  return timesOfAppears;
}

module.exports = countOccurrences;
