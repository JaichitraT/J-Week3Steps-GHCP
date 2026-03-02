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

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator-lib.js');

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

  // ==========================================
  // MODULO TESTS
  // ==========================================
  describe('Modulo (modulo)', () => {
    test('should calculate modulo: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo: 10 % 3 = 1', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with zero dividend: 0 % 5 = 0', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    test('should calculate modulo with equal numbers: 10 % 10 = 0', () => {
      expect(modulo(10, 10)).toBe(0);
    });

    test('should handle negative dividend: -10 % 3 = -1', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor: 10 % (-3) = 1', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle two negative numbers: -10 % (-3) = -1', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should handle decimal numbers: 10.5 % 3 = 1.5', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for negative modulo by zero', () => {
      expect(() => modulo(-10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // ==========================================
  // POWER/EXPONENTIATION TESTS
  // ==========================================
  describe('Power/Exponentiation (power)', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with zero exponent: 10 ^ 0 = 1', () => {
      expect(power(10, 0)).toBe(1);
    });

    test('should calculate power with exponent 1: 10 ^ 1 = 10', () => {
      expect(power(10, 1)).toBe(10);
    });

    test('should handle negative exponent: 2 ^ (-2) = 0.25', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle negative base: (-2) ^ 2 = 4', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle negative base and exponent: (-2) ^ 3 = -8', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle fractional exponents: 16 ^ 0.5 = 4', () => {
      expect(power(16, 0.5)).toBe(4);
    });

    test('should handle large exponents: 2 ^ 10 = 1024', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should handle decimal base: 1.5 ^ 2 = 2.25', () => {
      expect(power(1.5, 2)).toBe(2.25);
    });

    test('should handle zero base with positive exponent: 0 ^ 5 = 0', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  // ==========================================
  // SQUARE ROOT TESTS
  // ==========================================
  describe('Square Root (squareRoot)', () => {
    test('should calculate square root: sqrt(16) = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root: sqrt(25) = 5', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root: sqrt(2) ≈ 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356);
    });

    test('should handle zero: sqrt(0) = 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle one: sqrt(1) = 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle decimal numbers: sqrt(0.25) = 0.5', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should handle large numbers: sqrt(1000000) = 1000', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should handle very small numbers: sqrt(0.0001) = 0.01', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for large negative number', () => {
      expect(() => squareRoot(-1000)).toThrow('Square root of negative numbers is not allowed');
    });
  });

  // ==========================================
  // EXTENDED OPERATIONS INTEGRATION TESTS
  // ==========================================
  describe('Extended Operations - Real-world Examples from Image', () => {
    test('Example 1: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('Example 2: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('Example 3: sqrt(16) = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  // ==========================================
  // COMBINED EXTENDED OPERATIONS
  // ==========================================
  describe('Combined Extended Operations', () => {
    test('should chain: (2 ^ 3) % 5 = 3', () => {
      const step1 = power(2, 3);
      const result = modulo(step1, 5);
      expect(result).toBe(3);
    });

    test('should chain: sqrt(16) + (3 ^ 2) = 13', () => {
      const step1 = squareRoot(16);
      const step2 = power(3, 2);
      const result = add(step1, step2);
      expect(result).toBe(13);
    });

    test('should chain: sqrt(25) * (10 % 3) = 5', () => {
      const step1 = squareRoot(25);
      const step2 = modulo(10, 3);
      const result = multiply(step1, step2);
      expect(result).toBe(5);
    });

    test('should chain: (100 % 7) ^ 2 = 4', () => {
      const step1 = modulo(100, 7);
      const result = power(step1, 2);
      expect(result).toBe(4);
    });
  });
});
