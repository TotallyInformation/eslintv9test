/**
 * https://www.npmjs.com/search?q=eslint-config
 * https://www.npmjs.com/search?q=keywords:eslint
 *
 * npm init @eslint/config@latest -- --config eslint-config-standard
 * https://eslint.org/docs/latest/rules
 *
 * npx @eslint/config-inspector@latest
 * npx eslint --debug somefile.js
 * npx eslint --print-config file.js
 */

import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];

export default [
  {
    // default (browser-script): browser/script/2018
    // ignores: ['browser-module/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 2018,
    },
  },
  {
    // browser-module: browser/module/2019
    files: ['browser-module/**/*'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2019,
    },
  },
  {
    // node-cjs: node/commonjs/2020
    files: ['node-cjs/node-cjs.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 2019,
    },
  },
  {
    // node-esm: node/esm/latest
    files: ['node-esm/node-esm.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
];
