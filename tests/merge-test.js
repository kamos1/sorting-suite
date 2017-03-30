import { assert } from 'chai';
import { mergeSort } from '../scripts/merge'
import { generateNumbers } from '../helpers/generateNumbers'
import { compare } from '../helpers/compare'

describe('test merge sort', () => {
  let randomNumbers = generateNumbers(-5, 5000);

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

  it('should sort an array of lowercase letters', () => {
    let letters = ['b', 'r', 'q', 'z', 't', 'c'];

    assert.deepEqual(mergeSort(letters), letters.sort());
  })

  it('should sort an array of uppercase letters', () => {
    let letters = ['B', 'R', 'Q', 'Z', 'T', 'C'];

    assert.deepEqual(mergeSort(letters), letters.sort());
  })

  it('should sort an array of lowercase letters', () => {
    let letters = ['b', 'r', 'b', 'c', 't', 'c'];

    assert.deepEqual(mergeSort(letters), letters.sort());
  })

  it('should sort an array of lowercase and uppercase letters', () => {
    let letters = ['b', 'r', 'B', 'W', 'C', 'c'];

    assert.deepEqual(mergeSort(letters), letters.sort());
  })

  it('should return empty array if the array is empty', () => {
    let numbers = [];

    assert.deepEqual(mergeSort(numbers), []);
  })
})
