// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseIntWithString(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n)
}

function reverseInt(number) {
  let reversed = 0;

  while (number != 0) {
    reversed *= 10; // puts number in the correct position
    reversed += number % 10; // gets last digit
    number -= number % 10; 
    number /= 10;
  }

  return reversed;
}

module.exports = {
  reverseInt,
  reverseIntWithString
};
