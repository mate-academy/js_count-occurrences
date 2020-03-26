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
  if (!phrase.includes(letter)) {
    return 0;
  };

  let count = 0;

  for (const subStr of phrase) {
    if (subStr.toLowerCase() === letter) {
      count += 1;
    }
  }

  return count;
}

module.exports = countOccurrences;
