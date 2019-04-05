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
  let count = 0;
  let word = phrase.toLowerCase();
  let letr = letter.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letr) { count++; }
  }
  return count;
}

module.exports = countOccurrences;
