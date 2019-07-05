'use strict';

function countOccurrences(phrase, letter) {
  let newPharse = phrase.toLowerCase();
  const newLetter = letter.toLowerCase();
  let sum = 0;
  for (let i = 0; i < newPharse.length; i++) {
    const index = newPharse.indexOf(newLetter);
    if (index >= 0) {
      newPharse = newPharse.slice(index + 1);
      sum++;
    }
  }
  return sum;
}

countOccurrences('letter', 't');
countOccurrences('abc', 'a');
countOccurrences('abc', 'd');
countOccurrences('ABC', 'a');
