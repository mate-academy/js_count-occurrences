'use strict';

/**
 * Implement countOccurrences function:
 *
 * Function takes string and letter and calculates how many times letter appears
 * in given string. The function is case insensitive.
 *
 * countOccurrences('letter', 't') === 2
 * countOccurrences('abc', 'a') === 1
 * countOccurrences('abc', 'd') === 0
 * countOccurrences('ABC', 'a') === 1
 *
 * @param {string} phrase
 * @param {string} letter
 *
 * return {number}
 *
 */

function countOccurrences(inputPhrase, letter) {
  let phrase = inputPhrase.toLowerCase();
  let quantity = 0;
  let lastPos = -1;

  while (phrase.indexOf(letter, lastPos + 1) !== -1) {
    lastPos = phrase.indexOf(letter, lastPos + 1);
    quantity++;
  };
  return quantity;
}

module.exports = countOccurrences;
