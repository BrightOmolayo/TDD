const capitalizeFirstChar = require('./index')
const reverseString = require('./index')

// eslint-disable-next-line no-undef
test('capitilize', () => {
  // eslint-disable-next-line no-undef
  expect(capitalizeFirstChar('thgirB')).toBe('Bright')
})
// eslint-disable-next-line no-undef
test('reverseString 1', () => {
  // eslint-disable-next-line no-undef
  expect(reverseString('olleh')).toBe('hello')
})
