module.exports = {
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "endOfLine": "auto",
    "htmlWhitespaceSensitivity": "css",
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "parser": "babylon",
    "printWidth": 120,
    "proseWrap": "never",
    "quoteProps": "as-needed",
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "none",
    "useTabs": false,
    "overrides": [
        {
            "files": ".prettierrc",
            "options": {
                "parser": "json"
            }
        },
        {
            "files": "document.ejs",
            "options": {
                "parser": "html"
            }
        }
    ]
};

