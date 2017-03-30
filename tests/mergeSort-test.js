import { assert } from 'chai';
import { mergeSort } from '../scripts/mergeSort'
import { generateNumbers } from '../helpers/generateNumbers'
import { generateLetters } from '../helpers/generateLetters'
import { compare } from '../helpers/compare'

describe('test merge sort', () => {
  let randomNumbers = generateNumbers(-5, 5000);
  let randomLetters = generateLetters(5);

  it('should be an array', () => {

    assert.typeOf(randomNumbers, 'array');
  })

  it('should sort an array of numbers', () => {

    assert.deepEqual(mergeSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with negative values', () => {

    assert.deepEqual(mergeSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with duplicates', () => {
    let numbers = [10, 5, 6, 8, 0, 2, 1, 8, 7, 2, 10, 11, 15];

    assert.deepEqual(mergeSort(numbers), numbers.sort(compare));
  })

  it('should sort an array of letters', () => {

    assert.deepEqual(mergeSort(randomLetters), randomLetters.sort());
  })

  it('should sort an array of letters with duplicates', () => {
    let letters = ['b', 'r', 'b', 'w', 'c', 'c'];

    assert.deepEqual(mergeSort(letters), letters.sort());
  })

  it('should return empty array if the array is empty', () => {
    let numbers = [];

    assert.deepEqual(mergeSort(numbers), []);
  })
})
