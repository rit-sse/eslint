module.exports = {
  extends: [
    'airbnb',
    'sse/base',
  ],
  env:  {
    node: true,
    es6: true,
    browser: true,
  },
  ecmaFeatures: {
    es6: true,
    jsx: true,
  },
  rules: {
    'react/no-array-index-key': 'off',
  }
};
