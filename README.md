# Typescript Library Starter

[![Build Status](https://travis-ci.org/amaya-loves-tea/typescript-library-starter.svg?branch=master)](https://travis-ci.org/amaya-loves-tea/typescript-library-starter)
[![codecov: percent](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter)
[![commitizen: friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![docs: gh-pages](https://img.shields.io/badge/docs-gh--pages-blue.svg)](https://amaya-loves-tea.github.io/typescript-library-starter/)

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
- `yarn cov:publish` - Publish generated code coverage reports to [codecov](https://codecov.io/).
- `yarn doc` - Generates documentation from code using [typedoc](https://typedoc.org/).
- `yarn doc:open` - Opens generated documentation.
- `yarn doc:publish` - Publishes generated documentation to [github pages](https://pages.github.com/).

## Conventional Commits

Commit messages to this repository that don't follow the [conventional commit guidelines](https://www.conventionalcommits.org/en/) will be rejected by a `commit-msg` [git hook](#Git-Hooks).

No one likes rejection so please use the `yarn commit` script which provides a CLI interface for creating formated commits.

## Git Hooks

If you would like to run custom tasks during important actions on a repository you can use [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To make this as simple as possible we use [husky](https://github.com/typicode/husky) which is also used in the [conventional commits toolchain](#Conventional-Commits).

## Debugging

The following [launch configurations](https://code.visualstudio.com/docs/editor/debugging) will assist with debugging your library.

- `Current TS File` - debug current typescript file.
- `Current Jest Test` - debug current jest test.
- `All Jest Tests` - debug all jest tests.

## Continuous Integration

You can vet and automate a project build pipeline using a [continuous integration](https://www.thoughtworks.com/continuous-integration) service.

As it so happens, developers love automation so we set up [Travis CI](https://travis-ci.org/) for this repository.

To get started register your repository on travis and push to the master branch.

The default CI pipeline starts off with validating your code by running tests.

If Travis is pleased it will then publish your build to [npm](https://www.npmjs.com/) as well as supporting artifacts.

See the [documentation](#Documentation) and [code coverage](#Code-Coverage) sections for more on these artifacts.

You can change the CI pipeline by configuring the `.travis.yml` file.

## Documentation

Documenting code can be a tedious task but [typedoc](https://typedoc.org/) simplifies it tremendously.

Successful [CI builds](#Continuous-Integration) will automatically publish your documentation to [github pages](https://pages.github.com/).

## Code coverage

Code coverage reports can be used to indicate the reliability of your code base as they indicate your test coverage.

To get started you will need to register the repository on [codecov](https://codecov.io/) and have already registered on `travis`.

Your next build on travis will publish your current code coverage to `codecov`.

## Special Sauce

Collect many [badges](https://www.freecodecamp.org/news/how-to-use-badges-to-stop-feeling-like-a-noob-d4e6600d37d2/) to give your readme that that special something something.

Once you have [travis](#Continuous-Integration) and [codecov](#Code-coverage) set up make sure to their badges on your readme.

You can also create [your own badges](https://shields.io/) to link to any important resources such as your [documentation](#Documentation).

Refer to the badges in this readme for examples.
