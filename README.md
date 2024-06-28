# Setting up ESLint with TypeScript and Stylistic for Bun.js projects in VSCode

1. [Create a Bun project](#creating-a-bun-project)
2. [Install the VSCode ESLint extension](#installing-vscode-eslint-extension)
3. [Install the dependencies](#installing-the-dependencies)
4. [Create your `eslint.config.js` file](#creating-a-eslintconfigjs-file)

## Creating a Bun project

Open a console inside the directory you want and type:
```sh
bun init
```
This will create a `node_modules` folder, a `.gitignore` file, a `bun.lockb` file, an `index.ts` file, a `package.json` file, a `README.md` file and a `tsconfig.json` file.

You can edit `.gitignore`, `index.ts`, `package.json`, `README.md` and `tsconfig.json` as you want.

## Installing VSCode ESLint extension

Open VSCode, go to the extensions tab (`Ctrl+Shift+X`), search for `ESLint` and install the extension.

## Installing the dependencies

Inside your project's directory, open a console and type:
```sh
bun i -D @eslint/js @types/eslint__js eslint typescript-eslint @stylistic/eslint-plugin
```

## Creating a `eslint.config.js` file

At the root of your project, create a file named `eslint.config.js` with the following content:

```js
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
        rules: {}
    },
    // TypeScript
    {
        rules: {}
    },
    // Stylistic
    {
        rules: {}
    }
);
```

I like to keep things separated between ESLint base rules, TypeScript rules and Stylistic rules, but you can put them all in the first `rules` object if you like.

My base rules are the following:

```js
rules: {
    // ESLint
    'no-constant-condition': ['error', {
        checkLoops: 'allExceptWhileTrue'
    }],
    // TypeScript
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': ['error', {
        allowConstantLoopConditions: true
    }],
    '@typescript-eslint/restrict-template-expressions': ['error', {
        allowNumber: true
    }]
    // Stylistic
    '@stylistic/member-delimiter-style': ['error', {
        multiline: {
            delimiter: 'semi'
        }
    }],
    '@stylistic/eol-last': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/quotes': ['error', 'single']
}
```
