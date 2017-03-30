import { assert } from 'chai'
import { generateLetters } from '../helpers/generateLetters'

describe('test generateLetters function', () => {


  it('should be a function', () => {

    assert.isFunction(generateLetters)
  })

  it('should return an array', () => {
    let letter = generateLetters();

    assert.typeOf(letter, 'array');
  })

  it('should return an array of length 1', () => {
    let letter = generateLetters(1);

    assert.equal(letter.length, 1)
  })

  it('should return empty array if no parameter is passed', () => {
    let number = generateLetters();

    assert.deepEqual(number, []);
  })

})
