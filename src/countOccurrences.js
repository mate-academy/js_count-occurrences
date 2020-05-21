'use strict';

function countOccurrences(phrase, letter) {
  let letterCount = 0;
  const lowerLetter = letter.toLowerCase();
  const lowerPhrase = phrase.toLowerCase();

  for (const phraseLetter of lowerPhrase) {
    if (phraseLetter === lowerLetter) {
      letterCount++;
    }
  }

  return letterCount;
}

module.exports = countOccurrences;
