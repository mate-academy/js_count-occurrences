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
  if (!phrase) {
    return 0;
  }

  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseLetter = letter.toLowerCase();

  const hashMap = [...Array(256)].fill(0);

  for (const item of lowerCasePhrase) {
    hashMap[item.charCodeAt(0)]++;
  }

  return hashMap[lowerCaseLetter.charCodeAt(0)];
}

module.exports = countOccurrences;
