module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2024,
    sourceType: "module"
  },
  plugins: ["react", "import"],
  rules: {
    quotes: ["off", "single"],
    "linebreak-style": ["off"],
    "comma-dangle": ["off"],
    eqeqeq: ["error"],
    "no-var": ["error"],
    "prefer-template": ["error"],
    "spaced-comment": ["error"],
    "no-else-return": ["error"],
    "prefer-const": ["warn"],
    "operator-linebreak": ["off"],
    "object-shorthand": ["warn"],
    "lines-between-class-members": ["off"],
    indent: ["off"],
    "import/no-unresolved": ["off"],
    "no-plusplus": ["warn"],
    "import/prefer-default-export": ["error"],
    camelcase: ["warn"],
    "default-params-last": ["off"],
    "no-return-await": ["error"],
    // "prefer-promise-reject-error": ["error"],  to-do need to check
    "no-nested-ternary": ["warn"],
    "block-scoped-var": ["error"],
    // "no-params-reassign": ["error"], to-do need to check
    "func-names": ["error"],
    "no-console": ["warn"],
    "import/order": ["warn"],
    "no-unused-vars": ["warn"],
    "react/prop-types": ["off"],
    "react/jsx-curly-brace-presence": ["error"],
    "react/jsx-filename-extension": ["warn"],
    "react/jsx-props-no-spreading": ["error"],
    "react/function-component-definition": ["warn"],
    "react/no-unstable-nested-components": ["warn"],
    "react/self-closing-comp": ["warn"],
    "react/jsx-fragments": ["error"],
    "react/no-array-index-key": ["error"],
    "react/destructuring-assignment": ["warn"],
    "react/jsx-curly-brace-presence": ["error"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/jsx-no-useless-fragment": ["warn"],
    "react/no-unused-state": ["error"],
    "react/jsx-one-expression-per-line": ["warn"],
    "react/jsx-boolean-value": ["warn"],
    "react/jsx-curly-newline": ["off"],
    "react/prefer-stateless-function": ["error"],
    "react/no-deprecated": ["warn"],
    "object-curly-newline": ["warn", { multiline: true }],
    "dot-notation": ["warn"]
  }
  // rules: {}
};
