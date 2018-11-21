const {
  reverseInt,
  reverseIntWithString
} = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseIntWitString handles 0 as an input', () => {
  expect(reverseIntWithString(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseIntWithString(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseIntWithString(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseIntWithString(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseIntWithString(-2359)).toEqual(-9532);
});
