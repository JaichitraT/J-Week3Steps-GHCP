/**
 * Calculator Library
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

// Addition operation
function add(num1, num2) {
  return num1 + num2;
}

// Subtraction operation
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiplication operation
function multiply(num1, num2) {
  return num1 * num2;
}

// Division operation
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return num1 / num2;
}

// Export functions for testing and use
module.exports = { add, subtract, multiply, divide };
