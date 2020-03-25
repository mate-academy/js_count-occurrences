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
  const normilizePhrase = phrase.toLocaleLowerCase();
  const normilizeLetter = letter.toLocaleLowerCase();
  let count = 0;
  let pos = 0;

  while (true) {
    const positionPos = normilizePhrase.indexOf(normilizeLetter, pos);

    if (positionPos === -1) {
      break;
    }

    pos = positionPos + 1;
    count++;
  }

  return count;
}

module.exports = countOccurrences;
