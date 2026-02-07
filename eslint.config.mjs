import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended, // This includes the "no-unused-vars" rule by default
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Ensure it is set to "error"
      "no-unused-vars": "error",
    },
  },
];
