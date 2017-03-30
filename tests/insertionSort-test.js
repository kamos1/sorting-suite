import { assert } from 'chai';
import { insertionSort } from '../scripts/insertionSort'
import { generateNumbers } from '../helpers/generateNumbers'
import { generateLetters } from '../helpers/generateLetters'
import { compare } from '../helpers/compare'

describe('test insertion sort', () => {
  let randomNumbers = generateNumbers(-5, 5000);
  let randomLetters = generateLetters(5);

  it('should be an array', () => {

    assert.typeOf(randomNumbers, 'array');
  })

  it('should sort an array of numbers', () => {
    var array = [5, 4, 3, 2, 1];
    var array2 = [5, 4, 3, 2, 1];

    assert.deepEqual(insertionSort(array), array2.sort(compare));
  })

  it('should sort an array of numbers', () => {

    assert.deepEqual(insertionSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with negative values', () => {

    assert.deepEqual(insertionSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with duplicates', () => {
    let numbers = [10, 5, 6, 8, 0, 2, 1, 8, 7, 2, 10, 11, 15];

    assert.deepEqual(insertionSort(numbers), numbers.sort(compare));
  })

  it('should sort an array of letters', () => {

    assert.deepEqual(insertionSort(randomLetters), randomLetters.sort());
  })

  it('should sort an array of letters with duplicates', () => {
    let letters = ['b', 'r', 'b', 'c', 't', 'c'];

    assert.deepEqual(insertionSort(letters), letters.sort());
  })

  it('should return empty array if the array is empty', () => {
    let numbers = [];

    assert.deepEqual(insertionSort(numbers), []);
  })
})
