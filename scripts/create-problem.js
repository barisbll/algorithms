/**
 * Script to create a new problem solution file
 * 
 * Usage: npm run create:problem [problem-name]
 * Example: npm run create:problem two-sum
 */

const fs = require('fs');
const path = require('path');

// Get problem name from command line args or use a default
const problemName = process.argv[2] || 'new-problem';

// Convert to kebab-case filename
const fileName = `${problemName.toLowerCase().replace(/\s+/g, '-')}.ts`;
const filePath = path.join(__dirname, '..', 'src', 'problems', fileName);

// Template for new problem file
const template = `/**
 * Problem: ${problemName}
 * 
 * Description:
 * [Add problem description here]
 * 
 * Examples:
 * Input: 
 * Output: 
 */

// Solution
function solution() {
  // Implement your solution here
}

// Test cases
function runTests() {
  // Add your test cases here
  console.log('Running tests for ${problemName}...');
}

runTests();

export {}; // Makes this file a module
`;

// Create the file
fs.writeFileSync(filePath, template);

console.log(`Created new problem file: ${filePath}`);
console.log('To run this problem, import it in src/index.ts like this:');
console.log(`import './problems/${fileName.replace('.ts', '')}';`); 