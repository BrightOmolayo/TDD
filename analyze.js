function analyzeArray (numbersArray) {
  const sum = numbersArray.reduce((acc, val) => acc + val, 0)
  const average = sum / numbersArray.length
  const min = Math.min(...numbersArray)
  const max = Math.max(...numbersArray)
  const length = numbersArray.length

  return {
    average,
    min,
    max,
    length
  }
}
module.exports = analyzeArray
