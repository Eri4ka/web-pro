module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // Проверка длигы отступов. По дефолту - 4
    'react/jsx-indent': [2, 2],
    // Не показывает deprecated, так как юзает 17 версия реакта
    'react/no-deprecated': 0,
    // Показывать ли неиспользуемые переменные
    '@typescript-eslint/no-unused-vars': 1,
  },
};
