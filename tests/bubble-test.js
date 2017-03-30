import { assert } from 'chai';
import { bubbleSort } from '../scripts/bubble'
import { generateNumbers } from '../helpers/generateNumbers'
import { compare } from '../helpers/compare'

describe('test bubble sort', () => {
  let randomNumbers = generateNumbers(-5, 5000);

  it('should be an array', () => {

    assert.typeOf(randomNumbers, 'array');
  })

  it('should sort an array of numbers', () => {

    assert.deepEqual(bubbleSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with negative values', () => {

    assert.deepEqual(bubbleSort(randomNumbers), randomNumbers.sort(compare));
  })

  it('should sort an array of numbers with duplicates', () => {
    let numbers = [10, 5, 6, 8, 0, 2, 1, 8, 7, 2, 10, 11, 15];

    assert.deepEqual(bubbleSort(numbers), numbers.sort(compare));
  })

  it('should sort an array of lowercase letters', () => {
    let letters = ['b', 'r', 'q', 'z', 't', 'c'];

    assert.deepEqual(bubbleSort(letters), letters.sort());
  })

  it('should sort an array of uppercase letters', () => {
    let letters = ['B', 'R', 'A', 'Z', 'T', 'C'];

    assert.deepEqual(bubbleSort(letters), letters.sort());
  })

  it('should sort an array of lowercase letters with duplicates', () => {
    let letters = ['b', 'r', 'b', 'c', 't', 'c'];

    assert.deepEqual(bubbleSort(letters), letters.sort());
  })

  it('should sort an array of lowercase and uppercase letters', () => {
    let letters = ['b', 'r', 'B', 'W', 'C', 'c'];

    assert.deepEqual(bubbleSort(letters), letters.sort());
  })

  it('should return empty array if the array is empty', () => {
    let numbers = [];

    assert.deepEqual(bubbleSort(numbers), []);
  })
})
