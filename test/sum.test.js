const sum = require('../sum');

test('should add two numbers correctly', () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});
