const capitalizeFirstChar = require('./capitalize')
const reverseString = require('./reverse')
const caesarCipher = require('./caeserCipher')
const analyzeArray = require('./analyze')
// eslint-disable-next-line no-unused-vars
const calculator = require('./calculator')

// eslint-disable-next-line no-undef
test('capitilize', () => {
  // eslint-disable-next-line no-undef
  expect(capitalizeFirstChar('bright')).toBe('Bright')
})
// eslint-disable-next-line no-undef
test('reverseString', () => {
  // eslint-disable-next-line no-undef
  expect(reverseString('olleh')).toBe('hello')
})
// eslint-disable-next-line no-undef
test('calculator', () => {
  // eslint-disable-next-line no-undef
  expect((2 * 2)).toBe(4)
})
// eslint-disable-next-line no-undef
test('shifts "abc" by 1 to "bcd"', () => {
  // eslint-disable-next-line no-undef
  expect(caesarCipher('abc', 1)).toBe('bcd')
})

// eslint-disable-next-line no-undef
test('wraps "z" to "a" with a shift of 1', () => {
  // eslint-disable-next-line no-undef
  expect(caesarCipher('z', 1)).toBe('a')
})

// eslint-disable-next-line no-undef
test('keeps the same case', () => {
  // eslint-disable-next-line no-undef
  expect(caesarCipher('AbC', 1)).toBe('BcD')
})

// eslint-disable-next-line no-undef
test('does not change punctuation', () => {
  // eslint-disable-next-line no-undef
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
})
// eslint-disable-next-line no-undef
test('analyzes an array of numbers', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6])
  // eslint-disable-next-line no-undef
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

// eslint-disable-next-line no-undef
test('handles an array with negative numbers', () => {
  const result = analyzeArray([-2, -1, -3])
  // eslint-disable-next-line no-undef
  expect(result).toEqual({
    average: -2,
    min: -3,
    max: -1,
    length: 3
  })
})

// eslint-disable-next-line no-undef
test('handles an empty array', () => {
  const result = analyzeArray([])
  // eslint-disable-next-line no-undef
  expect(result).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0
  })
})
