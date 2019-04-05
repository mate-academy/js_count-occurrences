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
