const sum = require('./sum');
const stringLength = require('./stringlength');
const calculator = require('./test2');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('count characters in a string', () => {
  expect(stringLength("hakizimanana")).toBeGreaterThan(1) && toBeLessThan(10);
});

test('adding numbers', () => {
  expect( calculator.add(1,2)).toBe(3);
});

test('subst numbers', () => {
  expect( calculator.subs(6,2)).toBe(4);
});

