module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    proseWrap: 'never',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json'
            }
        },
        {
            files: 'document.ejs',
            options: {
                parser: 'html'
            }
        }
    ],

    arrowParens: 'avoid',
    bracketSpacing: true,
    endOfLine: 'auto',
    htmlWhitespaceSensitivity: 'css',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    // parser: "babel",
    printWidth: 120,
    quoteProps: 'as-needed',
    semi: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: false
};
