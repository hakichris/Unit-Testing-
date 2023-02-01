const sum = require('./sum');
const stringLength = require('./stringlength');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('count characters in a string', () => {
  expect(stringLength("hakizimanana")).toBeGreaterThan(1) && toBeLessThan(10);
});