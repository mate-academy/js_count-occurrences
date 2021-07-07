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
  // write code here
  const result = [];
  const arrPhrase = phrase.toLowerCase().split('');
  const lowerLetter = letter.toLowerCase();

  for (let i = 0; i < arrPhrase.length; i++) {
    if (arrPhrase[i].includes(lowerLetter)) {
      result.push(arrPhrase[i]);
    }
  }
  return result.length;
}

module.exports = countOccurrences;
