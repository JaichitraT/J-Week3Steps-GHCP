// src/tests/calculator.tests.js
const assert = require('assert');

// Example calculator functions for demonstration
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

describe('Calculator', () => {
  it('adds numbers correctly', () => {
    assert.strictEqual(calculator.add(2, 3), 5);
  });
  it('subtracts numbers correctly', () => {
    assert.strictEqual(calculator.subtract(5, 3), 2);
  });
});