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
  phrase = phrase.toLowerCase();
  var count = 0;
  var pos = 0;
  while (true) {
    var factPos = phrase.indexOf(letter, pos);
    if (factPos === -1) {
      break;
    }
    count++;
    pos = factPos + 1;
  }
  return count;// write code here
}

module.exports = countOccurrences;
