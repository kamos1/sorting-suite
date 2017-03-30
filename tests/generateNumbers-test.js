import { assert } from 'chai';
import { generateNumbers } from '../helpers/generateNumbers';

describe('test generateNumbers function', () => {

  it('should be  a function', () => {
    assert.isFunction(generateNumbers)
  })

  it('should return an array', () => {
    let number = generateNumbers();

    assert.typeOf(number, 'array');
  })

  it('should return an array of length 1', () => {
    let number = generateNumbers(0, 1);

    assert.equal(number.length, 1)
  })

  it('should return empty array if min is greater than max', () => {
    let number = generateNumbers(5, 1);

    assert.deepEqual(number, []);
  })

  it('should return empty array if one parameter is passed', () => {
    let number = generateNumbers(1);

    assert.deepEqual(number, []);
  })




});
