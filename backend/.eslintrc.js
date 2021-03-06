module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'camelcase':'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
  },
};
