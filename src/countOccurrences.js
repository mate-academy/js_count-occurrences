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
  let countLetters = 0;
  let letterToCount;
  let basePhrase;

  if (typeof letter === 'string' && letter.length === 1) {
    letterToCount = letter.toLowerCase();
  } else {
    return 'It is not a letter';
  }

  if (typeof phrase === 'string') {
    basePhrase = phrase.toLocaleLowerCase().split('');
  } else {
    return 'It is not a string';
  }

  for (let i = 0; i < basePhrase.length; i++) {
    if (basePhrase[i] === letterToCount) {
      countLetters += 1;
    }
  }
  return countLetters;
}

module.exports = countOccurrences;
