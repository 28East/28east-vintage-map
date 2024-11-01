module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  settings: { react: { version: 'detect' } },
  plugins: ['prettier', 'react', 'react-hooks', 'jsx'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': 'off',
    'no-await-in-loop': 0,
    'react/prop-types': 0,
    semi: ['warn', 'never'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
}
