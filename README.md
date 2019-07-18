# Typescript Library Starter

[![commitizen: friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![codecov](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter)

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

## Recommended Editor

[Visual Studio Code](https://code.visualstudio.com/) is simple, fast, extensible and beloved by many developers.

Therefore this project has been set up with rich support for it.

Make sure to install all the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) that come with the project for the best possible coding experience.

## NPM Scripts

Note that these examples use yarn but you can use the equivalent `npm run <command>` instead.

- `yarn style` - Runs all the style commands which ensure a consistent code style is followed.
- `yarn style:lint` - Lints your code using [eslint](https://github.com/typescript-eslint/typescript-eslint).
- `yarn style:format` - Formats your code using [prettier](https://prettier.io/).
- `yarn commit` - Starts a new commit using the [commitizen](https://github.com/commitizen/cz-cli) cli.
- `yarn clean` - Cleans up all build artifacts such as the distribution folder.
- `yarn build` - Runs all build commands to create builds for different node environments.
- `yarn build:main` - Creates a build using [CommonJS (cjs)](https://flaviocopes.com/commonjs/) modules.
- `yarn build:module` - Creates a build using [ES6 modules (esm)](https://exploringjs.com/es6/ch_core-features.html#sec_from-cjs-to-esm).
- `yarn test` - Runs all [jest](https://jestjs.io/en/) tests based on the `jestconfig.json` file and generates a code coverage report.
- `yarn test:watch` - Watches file changes and reruns tests for those changed files.
- `yarn cov` - Generate a code coverage report.
- `yarn cov:open` - Open generated code coverage reports.
- `yarn cov:publish --token="YOUR_TOKEN_HERE"` - Publish generated code coverage reports to [codecov](https://codecov.io/). You will need to replace `YOUR_TOKEN_HERE` with the token codecov gives you when running this command manually.
- `yarn doc` - Generates documentation from code using [typedoc](https://typedoc.org/).
- `yarn doc:open` - Opens generated documentation.
- `yarn doc:publish` - Publishes generated documentation to [github pages](https://pages.github.com/).

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
