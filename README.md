# Typescript Library Starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

## Recommended Editor

[Visual Studio Code](https://code.visualstudio.com/) is simple, fast, extensible and beloved by many developers.

Therefore this project has been set up with rich support for it.

Make sure to install all the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) that come with the project for the best possible coding experience.

## NPM Scripts

Note that these examples use yarn but you can use the equivalent `npm run <command>` instead.

- `yarn style` - runs all the style commands which ensure a consistent code style is followed.
- `yarn style:lint` - lints your code using [eslint](https://github.com/typescript-eslint/typescript-eslint).
- `yarn style:format` - formats your code using [prettier](https://prettier.io/).
- `yarn commit` - starts a new commit using the [commitizen](https://github.com/commitizen/cz-cli) cli.
- `yarn clean` - cleans up all build artifacts such as the distribution folder.
- `yarn build` - runs all build commands to create builds for different node environments.
- `yarn build:main` - creates a build using [commonjs (cjs)](https://flaviocopes.com/commonjs/) modules.
- `yarn build:module` - creates a build using [ES6 modules (esm)](https://exploringjs.com/es6/ch_core-features.html#sec_from-cjs-to-esm).
- `yarn test` - runs all [jest](https://jestjs.io/en/) tests based on the `jestconfig.json` file and generates a code coverage report.
- `yarn test:watch` - watches file changes and reruns tests for those changed files.
- `yarn cov` - generate a code coverage report.
- `yarn cov:open` - open generated code coverage reports.

## Conventional Commits

Commits to this repository that don't follow the [conventional commit guidelines](https://www.conventionalcommits.org/en/) will be rejected by a `commit-msg` [git hook](#Git-Hooks).

To easily create correctly formatted commits you can use the `yarn commit` script described in [NPM Scripts](#NPM-Scripts).

## Git Hooks

If you would like to run custom tasks during important actions on this repository you can use [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To make this as simple as possible we use [husky](https://github.com/typicode/husky) which is also used in the [conventional commits toolchain](#Conventional-Commits).

## Debugging

The following pre-configured [launch configurations](https://code.visualstudio.com/docs/editor/debugging) will assist with debugging your library.

- `Current TS File` - debug current typescript file.
- `Current Jest Test` - debug current jest test.
- `All Jest Tests` - debug all jest tests.
