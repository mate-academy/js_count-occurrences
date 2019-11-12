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
  let numberOfReps = 0;
  const inputLetter = letter.toLowerCase();
  const inputPhrase = [];

  for (let i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase[i].toLowerCase());
  }

  for (let i = 0; i < inputPhrase.length; i++) {
    if (inputPhrase[i] === inputLetter) {
      numberOfReps++;
    }
  }

  return numberOfReps;
}

module.exports = countOccurrences;
