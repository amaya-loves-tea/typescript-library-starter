# Typescript Library Starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

## Recommended Editor

[Visual Studio Code](https://code.visualstudio.com/) is simple, fast, extensible and beloved by many developers.

Therefore this project has been set up with rich support for it.

Make sure to install all the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) that come with the project for the best possible coding experience.

## Conventional Commits

We set up a [toolchain](https://medium.com/@klauskpm/how-to-create-good-commit-messages-67943d30cced) for ensuring contributors follow the [conventional commit guidelines](https://www.conventionalcommits.org/en/).

Badly structured commits will be rejected by the `commit-msg` [git hook](#Git-Hooks).

To assist with creating correctly formatted commits you can use the `yarn commit` script which will bring up a helpful CLI using [commitizen](https://github.com/commitizen/cz-cli).

## Git Hooks

If you would like to run custom tasks during important actions on a repository you can use [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To make this as simple as possible we use [husky](https://github.com/typicode/husky) which is also used in the [conventional commits toolchain](#Conventional-Commits).

Simply add your task to run in the `.huskyrc.json` file.

## Code style

A consistent code style is essential in any project and to ensure this we use [prettier](https://prettier.io/) and [eslint](https://github.com/typescript-eslint/typescript-eslint).

Prettier will format your files based on the `.prettierrc.json` config.

ESLint will lint your javascript and typescript files based on the `.eslintrc.json` config.

In vscode your files will automatically be formatted on save if you install the prettier extension and will be linted as you type.

Note however that we use the `pre-commit` [git hook](#Git-Hooks) to automatically format and lint code so no badly styled code gets committed.

Internally the commit hook runs the `yarn lint` and `yarn format` commands and you can also run them manually if you wish.
