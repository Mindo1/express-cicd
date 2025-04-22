<<<<<<< HEAD
const sum = require('../sum');
=======
const sum = require('../src/sum');
>>>>>>> parent of f279e4e (add eslint and prettier)

test('should add two numbers correctly', () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});
