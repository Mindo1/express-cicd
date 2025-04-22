const sum = require('../sum');

test('should add two numbers correctly', () => {
  const result = sum(1, 2);
  expect(result).toBe(4);  // ทำให้ test fail เพราะเราคาดว่า 1+2=4
});
