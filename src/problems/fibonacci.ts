/**
 * Problem: fibonacci
 * 
 * Description:
 * Implement a function to calculate the nth Fibonacci number.
 * The Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, 
 * and F(n) = F(n-1) + F(n-2) for n > 1.
 * 
 * Examples:
 * Input: 5
 * Output: 5 (as the sequence is 0, 1, 1, 2, 3, 5, 8, ...)
 */

// Solution 1: Recursive (inefficient)
function fibonacciRecursive(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Solution 2: Dynamic Programming (efficient)
function fibonacciDP(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let prev = 0;
  let current = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
}

// Test cases
function runTests() {
  console.log('Running tests for fibonacci...');
  
  const testCases = [0, 1, 2, 5, 10];
  
  console.log('Recursive Solution:');
  for (const n of testCases) {
    console.log(`Fibonacci(${n}) = ${fibonacciRecursive(n)}`);
  }
  
  console.log('\nDP Solution:');
  for (const n of testCases) {
    console.log(`Fibonacci(${n}) = ${fibonacciDP(n)}`);
  }
  
  // Performance comparison for larger input
  const largeN = 30;
  
  console.log('\nPerformance Comparison:');
  
  console.time('Recursive');
  fibonacciRecursive(largeN);
  console.timeEnd('Recursive');
  
  console.time('Dynamic Programming');
  fibonacciDP(largeN);
  console.timeEnd('Dynamic Programming');
}

runTests();

export {}; // Makes this file a module
