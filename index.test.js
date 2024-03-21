const capitalizeFirstChar = require('./capitalize')
const reverseString = require('./reverse')
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
