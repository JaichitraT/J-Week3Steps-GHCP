/**
 * Calculator Unit Tests
 * 
 * Comprehensive tests for all calculator functions including:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Edge cases (division by zero, negative numbers, decimals, etc.)
 */

const { add, subtract, multiply, divide } = require('../calculator-lib.js');

describe('Calculator Functions', () => {

  // ==========================================
  // ADDITION TESTS
  // ==========================================
  describe('Addition (add)', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two positive numbers: 10 + 10 = 20', () => {
      expect(add(10, 10)).toBe(20);
    });

    test('should handle negative numbers: -5 + 3 = -2', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('should handle two negative numbers: -5 + (-3) = -8', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should handle decimal numbers: 1.5 + 2.5 = 4', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should handle zero: 0 + 5 = 5', () => {
      expect(add(0, 5)).toBe(5);
    });

    test('should handle zero + zero = 0', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should handle large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ==========================================
  // SUBTRACTION TESTS
  // ==========================================
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two positive numbers: 20 - 8 = 12', () => {
      expect(subtract(20, 8)).toBe(12);
    });

    test('should handle negative result: 5 - 10 = -5', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should handle negative numbers: -5 - 3 = -8', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should handle two negative numbers: -10 - (-5) = -5', () => {
      expect(subtract(-10, -5)).toBe(-5);
    });

    test('should handle decimal numbers: 5.5 - 2.5 = 3', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });

    test('should handle zero: 10 - 0 = 10', () => {
      expect(subtract(10, 0)).toBe(10);
    });

    test('should handle zero - zero = 0', () => {
      expect(subtract(0, 0)).toBe(0);
    });
  });

  // ==========================================
  // MULTIPLICATION TESTS
  // ==========================================
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two positive numbers: 4 * 3 = 12', () => {
      expect(multiply(4, 3)).toBe(12);
    });

    test('should handle negative numbers: -5 * 3 = -15', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    test('should handle two negative numbers: -5 * (-3) = 15', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should handle decimal numbers: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle zero: 5 * 0 = 0', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should handle multiplication by 1: 100 * 1 = 100', () => {
      expect(multiply(100, 1)).toBe(100);
    });

    test('should handle large numbers: 1000 * 2000 = 2000000', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should handle small decimal numbers: 0.1 * 0.1 = 0.01', () => {
      expect(multiply(0.1, 0.1)).toBeCloseTo(0.01);
    });
  });

  // ==========================================
  // DIVISION TESTS
  // ==========================================
  describe('Division (divide)', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two positive numbers: 15 / 3 = 5', () => {
      expect(divide(15, 3)).toBe(5);
    });

    test('should handle negative numbers: -10 / 2 = -5', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should handle two negative numbers: -10 / (-2) = 5', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should handle decimal numbers: 10 / 2.5 = 4', () => {
      expect(divide(10, 2.5)).toBe(4);
    });

    test('should handle division resulting in decimal: 7 / 2 = 3.5', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should handle zero divided by non-zero: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should handle division by 1: 100 / 1 = 100', () => {
      expect(divide(100, 1)).toBe(100);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for negative division by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for zero divided by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle very small numbers: 0.0001 / 2 = 0.00005', () => {
      expect(divide(0.0001, 2)).toBeCloseTo(0.00005);
    });
  });

  // ==========================================
  // INTEGRATION / REAL-WORLD EXAMPLES
  // ==========================================
  describe('Real-world Examples from Image', () => {
    test('Example 1: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('Example 2: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('Example 3: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('Example 4: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  // ==========================================
  // COMBINED OPERATION TESTS
  // ==========================================
  describe('Combined Operations', () => {
    test('should chain operations: (10 + 5) * 2 = 30', () => {
      const step1 = add(10, 5);
      const result = multiply(step1, 2);
      expect(result).toBe(30);
    });

    test('should chain operations: (100 - 25) / 5 = 15', () => {
      const step1 = subtract(100, 25);
      const result = divide(step1, 5);
      expect(result).toBe(15);
    });

    test('should chain operations: ((12 + 3) * 2) / 3 = 10', () => {
      const step1 = add(12, 3);
      const step2 = multiply(step1, 2);
      const result = divide(step2, 3);
      expect(result).toBe(10);
    });
  });
});
