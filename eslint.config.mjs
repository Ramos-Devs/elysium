import prettierPlugin from 'eslint-plugin-prettier';
import * as next from 'eslint-config-next';

const eslintConfig = [
  {
    ignores: ['node_modules', '.next', 'dist'],
  },
  ...next.default,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];

export default eslintConfig;
