export default {
    globals: {
        atoria: true
    },
    rules : {
        "quotes": ["error", "single"],
        "allowArrowFunctions": true,
        "func-style": ["error", "expression"],
        "max-lines": ["error", {"max": 4, "skipComments": true}],
        "max-params": ["error", 4],
        "comma-dangle": ["error", "never"],
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "prefer-destructuring": ["error", {
            "array": true,
            "object": true
          }, {
            "enforceForRenamedProperties": false
          }],
        "max-len":["error", { "code": 90, "comments":100 }],
        "no-else-return": true // default - do not put an else statement at the end of an if statement.
    }
}