'use strict';

function countOccurrences(phrase, letter) {
  // write code here
  let letterCounter = 0;

  if (!phrase.length) {
    return 0;
  }

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() === letter.toLowerCase()) {
      letterCounter++;
    }
  }

  return letterCounter;
}

module.exports = countOccurrences;
