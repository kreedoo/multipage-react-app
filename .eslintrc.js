const { strictEslint } = require('@umijs/fabric');

module.exports = {
    ...strictEslint,
    rules: {
        "indent": [2, 4],
        "react/jsx-props-no-spreading": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "comma-dangle": [2, "never"],
        "no-console": 0
    },
    globals: {
        "it": "readonly"
    }
};
