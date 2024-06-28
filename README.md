# Setting up ESLint with TypeScript and ESLint Stylistic for Bun.js projects in VSCode

1. [Create a Bun project](#creating-a-bun-project)
2. [Install the VSCode ESLint extension](#installing-vscode-eslint-extension)
3. [Install the dependencies](#installing-the-dependencies)
4. [Create an `eslint.config.js` file](#creating-an-eslintconfigjs-file)

## Creating a Bun project

Open a console inside the directory you want and type:
```sh
bun init
```
This will create a `node_modules` folder, a `.gitignore` file, a `bun.lockb` file, an `index.ts` file, a `package.json` file, a `README.md` file and a `tsconfig.json` file.

You can edit `.gitignore`, `index.ts`, `package.json`, `README.md` and `tsconfig.json` as you want.

Read more about the `bun init` command [here](https://bun.sh/docs/cli/init).

## Installing VSCode ESLint extension

VSCode supports ESLint with [this extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

To install it, open VSCode, go to the extensions tab (`Ctrl+Shift+X`), search for `ESLint` and install the extension.

## Installing the dependencies

The required dependencies are:
- [ESLint](https://eslint.org/)
- [TypeScript-ESLint](https://typescript-eslint.io/)
- [ESLint Stylistic](https://eslint.style/)

Inside your project's directory, open a console and type:
```sh
bun i -D @eslint/js @types/eslint__js eslint typescript-eslint @stylistic/eslint-plugin
```

## Creating an `eslint.config.js` file

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

> I like to keep things separated between ESLint base rules, TypeScript rules and Stylistic rules, but you can put them all in the first `rules` object if you like.

You can view the rules I use in the [`eslint.config.js` file](./eslint.config.js).

## Using ESLint

When you edit a file, the VSCode extension should automatically add a red wavy underline if you broke a rule.

Remember to restart the ESLint server if you change your config. It should restart automatically, but if it crashes, you can do it manually by hitting `Ctrl+Shift+P` then selecting `ESLint: Restart ESLint Server`.

To view ESLint logs, hit `Ctrl+Shift+P` then select `ESLint: Show Output Channel`.

To lint all your files, open a console at your project's root, then type:
```sh
bunx eslint
```

You can also setup a `package.json`'s script to do this for you:
```jsonc
{
    // other props (name, description...)
    "scripts": {
        "lint": "bunx eslint"
    }
}
```
Then simply use:
```sh
bun lint
```

## Rules references

- ESLint : https://eslint.org/docs/latest/rules/
- TypeScript-ESLint : https://typescript-eslint.io/rules/#rules
- ESLint Stylistic : https://eslint.style/packages/default#rules
