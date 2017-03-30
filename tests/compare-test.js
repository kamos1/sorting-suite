import { assert } from 'chai';
import { compare } from '../helpers/compare';

describe('test compare function', () => {

  it('should be a function', () => {
    assert.isFunction(compare);
  })

  it('should return a negative value if a less than b', () => {

    assert.equal(compare(1, 8), -7);
  })

  it('should return a positive value if a is greater than b', () => {

    assert.equal(compare(2, 1), 1);
  })

  it('should return 0 if a and b are equal', () => {

    assert.equal(compare(1, 1), 0);
  })
})
