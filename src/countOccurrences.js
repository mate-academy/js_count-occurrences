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
  if (phrase === '') {
    return 0;
  }

  let counter = 0;
  const phraseToLowerCase = phrase.toLowerCase();
  const letterToLowerCase = letter.toLowerCase();

  for (let i = 0; i < phraseToLowerCase.length; i++) {
    const matchesChar = phraseToLowerCase[i];

    if (matchesChar === letterToLowerCase) {
      counter += 1;
    }
  }

  return counter;
}

module.exports = countOccurrences;
