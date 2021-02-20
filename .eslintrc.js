module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['vue', 'prettier'],

  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    '@vue/typescript'
  ],

  rules: {
    'no-console': 1,
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 2,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never'
        }
      }
    ],
    'vue/max-attributes-per-line': 0,
    'no-console': 'error',
    'no-debugger': 'error'
  }
}
