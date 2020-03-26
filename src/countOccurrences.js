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
  let numClone = 0;
  /* Кошмар забыл поставить круглые скобки в toLowerCase(),
   * дебаг не фурычит и lint не показывал ошибку =)
   */

  for (let section = 0; section <= phrase.length - 1; section++) {
    if (phrase[section].toLowerCase() === letter) {
      numClone++;
    }
  }

  return numClone;
}

module.exports = countOccurrences;
