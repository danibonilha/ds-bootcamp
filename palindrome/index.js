// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Cleaner solution reverting the string
function palindrome(str) {
	return str === str.split('').reverse().join('')
}

// Comparing chars solution with no unnecessary comparisons
function palindromeFor(str) {
	length = str.length;
	for (let i = 0; i < length / 2; i++) {
		if (str[i] !== str[length - i - 1]) {
			return false;
		}
	}
	return true
}

// Comparing chars solution but it does unnecessary comparisons
function palindromeEvery(str) {
	length = str.length;
	return str.split('').every((char, i) => (char === str[length - i - 1]));
}

module.exports = {
	palindrome,
	palindromeFor,
	palindromeEvery
};



