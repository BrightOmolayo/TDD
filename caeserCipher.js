function caesarCipher (str, shift) {
  // Helper function to get the new shifted character
  function shiftChar (char, shift) {
    const isUpperCase = char === char.toUpperCase()
    let charCode = char.charCodeAt(0) - (isUpperCase ? 65 : 97)
    charCode = (charCode + shift + 26) % 26
    return String.fromCharCode(charCode + (isUpperCase ? 65 : 97))
  }

  // Main function to apply the cipher
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      return shiftChar(char, shift)
    }
    return char
  }).join('')
}
module.exports = caesarCipher
