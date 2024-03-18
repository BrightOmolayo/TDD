function capitalizeFirstChar (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
module.exports = capitalizeFirstChar

function reverseString (string) {
  return string.split('').reverse().join('')
}
module.exports = reverseString
