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
  var foundLetters = 0;
  var phraseLowerCase = phrase.toLowerCase();
  for (var i = 0; i < phraseLowerCase.length; i++) {
    if (phraseLowerCase[i] === letter) {
      foundLetters++;
    }
  }
  return foundLetters;
}
module.exports = countOccurrences;
