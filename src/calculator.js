#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

// Import calculator functions
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('./calculator-lib.js');

// Parse command-line arguments
const args = process.argv.slice(2);

// Helper function to validate and parse numbers
function parseNumber(value) {
  const num = parseFloat(value);
  if (isNaN(num)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return num;
}

// Main calculator function
function calculate() {
  // Validate input
  if (args.length < 2) {
    console.error('Error: Invalid syntax');
    console.error('Usage:');
    console.error('  Binary operations: node calculator.js <number1> <operator> <number2>');
    console.error('  Unary operations:  node calculator.js <operator> <number>');
    console.error('Binary Operators: +, -, *, /, %, ^');
    console.error('Unary Operators:  sqrt');
    console.error('Examples:');
    console.error('  node calculator.js 10 + 5');
    console.error('  node calculator.js 20 - 8');
    console.error('  node calculator.js 4 "*" 3');
    console.error('  node calculator.js 15 / 3');
    console.error('  node calculator.js 10 % 3');
    console.error('  node calculator.js 2 "^" 3');
    console.error('  node calculator.js sqrt 16');
    process.exit(1);
  }

  try {
    let result;

    // Check if it's a unary operation (sqrt)
    if (args.length === 2 && args[0] === 'sqrt') {
      const num = parseNumber(args[1]);
      result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
      return;
    }

    // Binary operations
    if (args.length !== 3) {
      throw new Error('Invalid number of arguments for binary operation');
    }

    const num1 = parseNumber(args[0]);
    const operator = args[1];
    const num2 = parseNumber(args[2]);

    // Perform calculation based on operator
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '^':
        result = power(num1, num2);
        break;
      default:
        throw new Error(`Invalid operator: ${operator}. Supported operators: +, -, *, /, %, ^`);
    }

    // Display the result
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run the calculator
calculate();

