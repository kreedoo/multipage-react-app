module.exports = {
    "extends": ["airbnb"],
    "root": true,
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": "off",
        "import/no-unresolved": ["error", {
            "ignore": ["^@/"]
        }],
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": ["**/tests/**.js", "/mock/**/**.js", "**/**.test.js"]
        }],
        "react/prop-types": ["off"],
        "react/forbid-prop-types": ["off"],
        "react/jsx-props-no-spreading": ["off"],
        "react/jsx-filename-extension": ["error", {
            "extensions": [".js", ".jsx"]
        }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-one-expression-per-line": ["off", {
            "allow": "literal"
        }],
        // "react/no-unescaped-entities": ["off"],
        "jsx-a11y/anchor-is-valid": "off",
        "comma-dangle": ["error", "never"],
        "no-console": "off"
    },
    "globals": {
        "it": "readonly"
    }
};
