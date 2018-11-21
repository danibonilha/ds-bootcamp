// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  let max = 0;
  let maxChar = ''
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1
  }
  for(let char in chars){
    if(max < chars[char]){
      max =  chars[char]
      maxChar = char
    }
  }
  return maxChar
}

// function maxChar(str) {
//   const chars = {}
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//   }
//   const countCharArray = Object.values(chars)
//   const maxCharIndex = countCharArray.indexOf(Math.max(...countCharArray))
//   return Object.keys(chars)[maxCharIndex]
// }

module.exports = maxChar;
