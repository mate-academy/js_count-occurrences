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
  const leterCharAt = letter.toLowerCase().charAt();
  let numOfLeters = 0;

  for (let i = 0; i < phrase.length; i++) {
    const praseCharAt = phrase.toLowerCase().charAt(i);

    if (praseCharAt === leterCharAt) {
      numOfLeters += 1;
    }
  }

  return numOfLeters;
}

module.exports = countOccurrences;
