const capitalizeFirstChar = require('./capitalize')
const reverseString = require('./reverse')
const caesarCipher = require('./caeserCipher')
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
