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
  let pos = 0;
  const positionsArr = [];
  while (true) {
    const foundPos = phrase.toLowerCase().indexOf(letter, pos);
    if (foundPos === -1) {
      break;
    }
    positionsArr.push(foundPos);
    pos = foundPos + 1;
  }
  return positionsArr.length;
}

module.exports = countOccurrences;
