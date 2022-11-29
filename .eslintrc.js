module.exports = {
    plugins: ['css-modules'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
            ts: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:css-modules/recommended',
    ],
    rules: {
        'react/prop-types': 0,
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'css-modules/no-unused-class': [2, { camelCase: true }],
        'css-modules/no-undef-class': [2, { camelCase: true }],
    },
    ignorePatterns: ['src/serviceWorker.ts'],
};
