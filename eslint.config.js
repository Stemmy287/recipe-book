// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  tseslint.configs.recommended,
  {
    ignores: ['dist/*'],
    plugins: { '@stylistic': stylistic },
    rules: {
      quotes: ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'indent': ['warn', 2],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['warn', 2],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-max-props-per-line': ['warn', {
        'maximum': 1,
        'when': 'multiline' 
      }],
      'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
      'react/jsx-wrap-multilines': [
        'warn',
        {
          'declaration': 'parens-new-line',
          'assignment': 'parens-new-line',
          'return': 'parens-new-line',
          'arrow': 'parens-new-line',
          'condition': 'parens-new-line',
          'logical': 'parens-new-line',
          'prop': 'parens-new-line'
        }
      ],
      'import/no-unresolved': 'off',
      'object-curly-spacing': ['warn', 'always'],
      'max-len': ['warn', { 
        'code': 120,
        'ignoreUrls': true
      }],
      '@stylistic/semi': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      '@stylistic/member-delimiter-style': 'warn'
    }
  }
]);
