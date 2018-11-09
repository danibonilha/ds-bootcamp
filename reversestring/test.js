const {
	reverse,
	reverseReduce,
	reverseForOf,
	reverseFor
} = require('./index');

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseReduce('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string', () => {
  expect(reverseForOf('apple')).toEqual('elppa');
});

test('Reverse reverses a string', () => {
  expect(reverseFor('javascript')).toEqual('tpircsavaj');
});