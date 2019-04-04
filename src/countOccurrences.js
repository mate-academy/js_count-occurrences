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
  var amountOfLett = 0;

  for (var i = 0; i < phrase.length; i++) {
    if (letter === phrase[i] || letter === phrase[i].toLowerCase()) {
      amountOfLett++;
    }
  }
  return amountOfLett;
}

module.exports = countOccurrences;
