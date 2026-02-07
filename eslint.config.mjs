import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "public/**", ".vite/**"],
  },

  js.configs.recommended,

  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    rules: {
      "no-unused-vars": "error",
    },
  },
];
