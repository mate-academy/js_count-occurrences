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
  let numberEntries = 0; // количество вхождений letter в phrase
  let positionSimbol = 0;
  letter = letter.toLowerCase(); // приводим все к нижнему  регистру
  phrase = phrase.toLowerCase(); // приводим все к нижнему  регистру
  while (true) {
    let foundPos = phrase.indexOf(letter, positionSimbol); // место в нашем списке в котором найден letter
    if (foundPos === -1) break;
    positionSimbol = foundPos + 1;
    numberEntries++;
  }
  return numberEntries;
}

module.exports = countOccurrences;
