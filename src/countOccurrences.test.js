'use strict';

const countOccurrences = require('./countOccurrences');

test('Should find a single small letter', () => {
  expect(countOccurrences('samsung', 'a'))
    .toBe(1);
});

test('Should find multiple small letters', () => {
  expect(countOccurrences('samsung is gnusmas', 's'))
    .toBe(5);
});

test('Should work for big and small letters in phrase', () => {
  expect(countOccurrences('Samsung is gnusmas', 's'))
    .toBe(5);
});

test('Should work for a big letter', () => {
  expect(countOccurrences('Abracadabra', 'A'))
    .toBe(5);
});

test('Should return 0 for an empty string', () => {
  expect(countOccurrences('', 'a'))
    .toBe(0);
});

test('Should return 0 for missing letter', () => {
  expect(countOccurrences('Samsung', 'b'))
    .toBe(0);
});
