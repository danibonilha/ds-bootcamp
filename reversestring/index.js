// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * WARN:
 * split('') should not be used in robust reverse 
 * string solutions because It doesn't work if the string 
 * contains grapheme clusters.
 * As documented: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Reversing_a_String_using_split()
 */



/**
 * Cleaner Solution
 * split() returns an array with each char of the string
 * reverse() returns the reversed array
 * join() returns a string concatenating all chars of the array
 */ 

function reverse(str) {
	return str.split('').reverse().join('');
}

// ES6 reduce array helper solution
function reverseReduce(str) {
	return str.split('').reduce((revStr, char) => (char + revStr), '')
}

// for loop cleaner solution
function reverseForOf(str) {
	let reversedStr = '';
	for (let char of str) {
		reversedStr = char + reversedStr;
	}
	return reversedStr
}

// for loop old school
function reverseFor(str) {
	let reversedStr = '';
	const stringLength = str.length;
	for (let i = stringLength - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr
}

module.exports = {
	reverse,
	reverseReduce,
	reverseForOf,
	reverseFor
};