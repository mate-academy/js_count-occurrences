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

  const firstParam = phrase.toLowerCase();
  const secondParam = letter.toLowerCase();

  let count = 0;
  let index = firstParam.indexOf(secondParam);
  while (index !== -1) {
    count++;
    index = firstParam.indexOf(secondParam, index + 1);
  }
  return count;
}

module.exports = countOccurrences;
