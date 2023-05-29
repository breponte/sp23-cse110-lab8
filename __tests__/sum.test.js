// sum.test.js

// import sum.js
const sum = require('../code-to-unit-test/sum.js');

// test sum.js
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});