import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';

export default [
  // 1. Apply JS recommended rules
  js.configs.recommended,

  // 2. Apply Vue essential rules
  ...pluginVue.configs['flat/essential'],

  // 3. Custom project settings
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node, // Useful if you have build scripts
      },
    },
    rules: {
      // Example: suppress the "unused" error you mentioned
      'no-unused-vars': 'warn',
    },
  },
];
