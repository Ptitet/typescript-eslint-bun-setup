import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    stylistic.configs.customize({
        commaDangle: 'never',
        braceStyle: '1tbs',
        indent: 4,
        jsx: false,
        quoteProps: 'as-needed',
        quotes: 'single',
        semi: true
    }),
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        // ESLint
        rules: {
            'no-constant-condition': ['error', {
                checkLoops: 'allExceptWhileTrue'
            }]
        }
    },
    {   // TypeScript
        rules: {
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unnecessary-condition': ['error', {
                allowConstantLoopConditions: true
            }],
            '@typescript-eslint/prefer-nullish-coalescing': ['error', {
                ignorePrimitives: {
                    boolean: true
                }
            }],
            '@typescript-eslint/restrict-plus-operands': ['error', {
                allowNumberAndString: true
            }],
            '@typescript-eslint/restrict-template-expressions': ['error', {
                allowNumber: true
            }]
        }
    },
    {   // Stylistic
        rules: {
            '@stylistic/arrow-parens': 'off',
            '@stylistic/eol-last': 'error',
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi'
                }
            }],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/no-multi-spaces': ['error', {
                ignoreEOLComments: true
            }],
            '@stylistic/quotes': ['error', 'single', {
                avoidEscape: true
            }]
        }
    }
);
