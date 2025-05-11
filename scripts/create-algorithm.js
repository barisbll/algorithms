/**
 * Script to create a new algorithm example file
 * 
 * Usage: npm run create:algorithm [category] [algorithm-name]
 * Example: npm run create:algorithm sorting bubble-sort
 */

const fs = require('fs');
const path = require('path');

// Get category and algorithm name from command line args
const category = process.argv[2] || 'fundamentals';
const algorithmName = process.argv[3] || 'new-algorithm';

// Convert to kebab-case filename
const fileName = `${algorithmName.toLowerCase().replace(/\s+/g, '-')}.ts`;

// Create the directory path
const dirPath = path.join(__dirname, '..', 'src', 'fundamentals', category);
const filePath = path.join(dirPath, fileName);

// Template for new algorithm file
const template = `/**
 * Algorithm: ${algorithmName}
 * Category: ${category}
 * 
 * Description:
 * [Add algorithm description here]
 * 
 * Time Complexity:
 * - Best Case: 
 * - Average Case: 
 * - Worst Case: 
 * 
 * Space Complexity:
 * 
 * Example Usage:
 * Input: 
 * Output: 
 */

// Implementation
function ${algorithmName.replace(/-/g, '')}() {
  // Implement your algorithm here
}

// Test cases
function runTests() {
  console.log('Running tests for ${algorithmName}...');
  
  // Add your test cases here
  const testCases = [
    // Example test case
    {
      input: [],
      expected: [],
      description: 'Empty array'
    }
  ];

  testCases.forEach((testCase, index) => {
    const result = ${algorithmName.replace(/-/g, '')}(testCase.input);
    console.log(\`Test \${index + 1}: \${testCase.description}\`);
    console.log('Input:', testCase.input);
    console.log('Expected:', testCase.expected);
    console.log('Result:', result);
    console.log('Pass:', JSON.stringify(result) === JSON.stringify(testCase.expected));
    console.log('---');
  });
}

runTests();

export {}; // Makes this file a module
`;

// Create directory if it doesn't exist
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Create the file
fs.writeFileSync(filePath, template);

console.log(`Created new algorithm file: ${filePath}`);
console.log('To run this algorithm, import it in src/index.ts like this:');
console.log(`import './fundamentals/${category}/${fileName.replace('.ts', '')}';`); 