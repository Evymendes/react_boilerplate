module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "installedESLint": true,
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn"
    ],
    "no-extra-semi": [
      "warn"
    ],
    "no-var": [
      "warn"
    ],
    "max-len": [
      "error"
    ],
    "camelcase": [
      "warn"
    ],
    "brace-style": [
      "warn",
      "1tbs"
    ],
    "space-before-blocks": [
      "warn"
    ],
    "react/jsx-no-bind": [
      "warn"
    ],
    "react/jsx-key": [
      "warn"
    ],
    "react/prop-types": [
      "error"
    ]
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"]
};
