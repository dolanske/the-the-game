module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-bitwise": 0,
    camelcase: 1,
    curly: 0,
    eqeqeq: 1,
    "guard-for-in": 0,
    "wrap-iife": [1, "any"],
    "no-use-before-define": 0,
    "new-cap": 1,
    "no-caller": 1,
    "no-empty": 0,
    "no-new": 0,
    "no-plusplus": 0,
    quotes: [1, "double"],
    "no-undef": 1,
    "no-unused-vars": 0,
    strict: 0,
    "max-statements": [1, 50],
    complexity: 0,
    "max-len": [
      0,
      {
        code: 140,
        ignoreComments: true
      }
    ],
    semi: 0,
    "no-cond-assign": 0,
    "no-debugger": 0,
    "no-eq-null": 0,
    "no-eval": 0,
    "no-unused-expressions": 0,
    "block-scoped-var": 0,
    "no-iterator": 0,
    "linebreak-style": 0,
    "comma-style": [1, "last"],
    "no-loop-func": 1,
    "no-multi-str": 0,
    "no-proto": 0,
    "no-script-url": 0,
    // "no-shadow": ["error", { "allow": ["state", "getters"] }],
    "no-shadow": 1,
    "dot-notation": 1,
    "no-new-func": 0,
    "no-new-wrappers": 0,
    "no-invalid-this": 0
  }
};
