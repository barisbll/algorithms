# Algorithm Practice Sandbox

A Node.js environment for practicing algorithm problems using TypeScript.

## Setup

```bash
# Install dependencies
npm install
```

## How to Use

### Running the Sandbox

```bash
# Start the sandbox with automatic reloading
npm run dev

# Compile TypeScript to JavaScript
npm run build

# Run the compiled JS
npm start
```

### Creating a New Problem

```bash
# Create a new problem file
npm run create:problem [problem-name]

# Example:
npm run create:problem two-sum
```

This will create a new file in `src/problems/` with a template for your solution.

### Working on a Problem

1. Create a new problem file using the command above
2. Implement your solution in the new file
3. Edit `src/index.ts` to import your problem file
4. Run `npm run dev` to see your solution in action

### Running a Specific Solution

You can also directly run any solution file without modifying index.ts:

```bash
# Run a specific solution
npm run run:solution src/problems/your-problem-file.ts
```

## Project Structure

```
.
├── src/                   # Source code
│   ├── index.ts           # Entry point
│   └── problems/          # Problem solutions
│       └── example.ts     # Example problem
├── scripts/               # Utility scripts
│   └── create-problem.js  # Script to create new problem files
├── dist/                  # Compiled JavaScript (after build)
├── package.json           # Project configuration
└── tsconfig.json          # TypeScript configuration
```

## Tips

- Use TypeScript to get type checking and better IDE support
- Keep each problem solution in its own file
- Add test cases to verify your solutions
- Use the console to debug your code 