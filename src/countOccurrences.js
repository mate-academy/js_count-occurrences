'use strict';

/**
 * Implement countOccurrences function:
 *
 * Function takes string and letter and calculates how many times letter appears
 * in given string. The function is case insensitive.
 *
 * @param {string} phrase
 * @param {string} letter
 *
 * return {number}
 *
 * countOccurrences('letter', 't') === 2
 * countOccurrences('abc', 'a') === 1
 * countOccurrences('abc', 'd') === 0
 * countOccurrences('ABC', 'a') === 1
 *
 */

function countOccurrences(phrase, letter) {
  // write code here
  // phrase = phrase.toLowerCase();
  let lowercasePhraze = phrase.toLowerCase();
  let result = 0;
  for (let letterInPhrase of lowercasePhraze) {
    if (letterInPhrase === letter) {
      result++;
    }
  }
  return result;
}
module.exports = countOccurrences;
