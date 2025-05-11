/**
 * Example Algorithm Problem
 * 
 * Problem: Find the sum of all numbers in an array
 */

function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Test cases
const testCase1 = [1, 2, 3, 4, 5];
const testCase2 = [-1, -2, 10];
const testCase3: number[] = [];

console.log(`Sum of ${testCase1}: ${sumArray(testCase1)}`); // Expected: 15
console.log(`Sum of ${testCase2}: ${sumArray(testCase2)}`); // Expected: 7
console.log(`Sum of ${testCase3}: ${sumArray(testCase3)}`); // Expected: 0

export {}; // Makes this file a module 