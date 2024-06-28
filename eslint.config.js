import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        plugins: {
            '@stylistic': stylistic
        },
        languageOptions: {
            parserOptions: {
                project: true
            }
        },
        // ESLint
        rules: {
            'no-constant-condition': ['error', {
                checkLoops: 'allExceptWhileTrue'
            }]
        }
    },
    // TypeScript
    {
        rules: {
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unnecessary-condition': ['error', {
                allowConstantLoopConditions: true
            }],
            '@typescript-eslint/restrict-template-expressions': ['error', {
                allowNumber: true
            }],
            '@typescript-eslint/prefer-nullish-coalescing': ['error', {
                ignorePrimitives: {
                    boolean: true
                }
            }]
        }
    },
    // Stylistic
    {
        rules: {
            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi'
                }
            }],
            '@stylistic/eol-last': 'error',
            '@stylistic/semi': 'error',
            '@stylistic/quotes': ['error', 'single']
        }
    }
);
