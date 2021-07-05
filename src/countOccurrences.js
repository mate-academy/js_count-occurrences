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
  const phraseFixed = phrase.toLowerCase();
  const letterFixed = letter.toLowerCase();

  let numOfRepeats = 0;

  for (let i = phraseFixed.length; i >= 0; i--) {
    if (phraseFixed[i] === letterFixed) {
      numOfRepeats += 1;
    }
  }

  return numOfRepeats;
}

module.exports = countOccurrences;
