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
  let p = phrase.toLowerCase();
  let l = letter.toLowerCase();
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    for (let k = 0; k < p.length; k++) {
      if (l[i] === p[k]) {
        sum++;
      }
    }
  }
  return sum;
}
console.log(countOccurrences('fD', 'asfasfdDS'));
module.exports = countOccurrences;
