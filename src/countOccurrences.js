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
  // Прошлое
  // const arr = [];
  // const str = phrase.toLocaleLowerCase();
  // str.split('').map(item => item === letter ? arr.push(item) : 0);
  // return arr.length;
  // Новое
  let res = 0;

  for (const value of phrase.toLowerCase()) {
    if (value === letter) {
      res++;
    }
  }

  return res;
}

module.exports = countOccurrences;
