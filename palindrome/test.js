const {
	palindrome,
	palindromeFor,
	palindromeEvery
} = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"ababa" is not a palindrome', () => {
  expect(palindromeFor('ababa')).toBeTruthy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindromeFor('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindromeEvery('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindromeEvery('Fish hsif')).toBeFalsy();
});

