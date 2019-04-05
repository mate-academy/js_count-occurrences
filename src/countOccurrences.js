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
