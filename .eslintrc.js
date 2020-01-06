const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      // webpack: {
      //   config: path.join(__dirname, './.stroybook/webpack.config.js'),
      // },
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },
  rules: {
    'prettier/prettier': 2,
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['-/'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_$',
      },
    ],
  },
}
