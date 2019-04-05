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
  let ph = phrase.toLowerCase();
  let le = letter.toLowerCase();
  let count = 0;
  let position = ph.indexOf(le);
  while (position !== -1) {
    count++;
    position = ph.indexOf(le, position + 1);
  }
  return count;
}

module.exports = countOccurrences;
