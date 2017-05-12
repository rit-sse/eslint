module.exports = {
  extends: [
    'airbnb-base',
  ],
  env:  {
    node: true,
    es6: true,
  },
  ecmaFeatures: {
    es6: true,
  },
  plugins: [
    'prefer-object-spread',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': 'off',
    'prefer-object-spread/prefer-object-spread'; 'error',
  },
};
