// .eslintrc.cjs
module.exports = {
  root: true, // This tells ESLint to stop looking in parent folders for configurations
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Add any project specific rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  overrides: [
    {
      // Configuration for test files
      files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
