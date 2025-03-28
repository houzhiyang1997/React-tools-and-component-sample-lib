module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier', '@typescript-eslint', 'react-hooks'],
    rules: {
        // 示例配置，你可以自己根据项目配置规则
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
};
