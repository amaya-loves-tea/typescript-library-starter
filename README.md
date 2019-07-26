# Typescript Library Starter

[![npm (scoped)](https://img.shields.io/npm/v/@teasenshi/typescript-library-starter?label=npm%20package)](https://www.npmjs.com/package/@teasenshi/typescript-library-starter)
[![greenkeeper badge](https://badges.greenkeeper.io/amaya-loves-tea/typescript-library-starter.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/amaya-loves-tea/typescript-library-starter.svg?branch=master)](https://travis-ci.org/amaya-loves-tea/typescript-library-starter)
[![codecov: percent](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter)
[![commitizen: friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![docs: gh-pages](https://img.shields.io/badge/docs-gh--pages-blue.svg)](https://amaya-loves-tea.github.io/typescript-library-starter/)

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

## Recommended Editor

You should be using [Visual Studio Code](https://code.visualstudio.com/) because its simple, fast, extensible and beloved by many developers.

Make sure to install all the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) that come with the repository for the best possible coding experience.

## NPM Scripts

Note that these examples use yarn but you can use the equivalent `npm run <command>` instead.

Most of these commands will automatically run when you perform certain actions on the repository.

### Code style

Ensures code consistency in your code base. They automatically get run before commits.

- `yarn style` - Runs all the style commands.
- `yarn style:lint` - Lints your code using [eslint](https://github.com/typescript-eslint/typescript-eslint).
- `yarn style:format` - Formats your code using [prettier](https://prettier.io/).

### Build Tasks

Creates builds from your Typescript files.

- `yarn build` - Runs all build commands to create builds for different node environments.
- `yarn build:main` - Creates a build using [CommonJS (cjs)](https://flaviocopes.com/commonjs/) modules.
- `yarn build:module` - Creates a build using [ES6 modules (esm)](https://exploringjs.com/es6/ch_core-features.html#sec_from-cjs-to-esm).

### Testing

Tasks to run [jest](https://jestjs.io/en/) tests to ensure your code is reliable.

Tests will automatically run before commits.

- `yarn test` - Runs all tests and generates a code coverage report.
- `yarn test:watch` - Watches file changes and reruns tests for those changed files.

### Code Coverage

Tasks for generating and publishing code coverage reports.

If you sign up to [travis](#Continuous-Integration) and [codecov](https://codecov.io/) these reports automatically get published after successful builds.

- `yarn cov` - Generate a code coverage report.
- `yarn cov:open` - Open generated code coverage report.
- `yarn cov:publish` - Publish generated code coverage reports to [codecov](https://codecov.io/).

### Documentation

Tasks for generating and publishing documentation based on your [typedoc](https://typedoc.org/) comments.

If you sign up to [travis](#Continuous-Integration), docs automatically get published to [github pages](https://pages.github.com/) after successful builds.

- `yarn doc` - Generates documentation from code.
- `yarn doc:open` - Opens generated documentation in your default browser.
- `yarn doc:publish` - Publishes generated documentation.

### Helpers

These commands perform misc tasks.

- `yarn commit` - Create a new commit using the [commitizen](https://github.com/commitizen/cz-cli) cli.
- `yarn clean` - Cleans up all build artifacts such as the distribution folder.

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

If Travis is pleased it will then publish your artifacts and finally your build to [npm](https://www.npmjs.com/) using [semantic release](https://github.com/semantic-release/semantic-release).

You will need to add some environment variables to travis to enable semantic releases, see their docs for more on getting started.

You can change the CI pipeline by configuring the `.travis.yml` file and the release options by configuring `.releaserc.json`.

## Greenkeeper

[Greenkeeper](https://greenkeeper.io/) is a service that will keep your dependencies up to date to avoid dependency related issues.

Make sure to enable this service on your repository for peace of mind.

## Special Sauce

Collect many [badges](https://www.freecodecamp.org/news/how-to-use-badges-to-stop-feeling-like-a-noob-d4e6600d37d2/) to give your readme that that special something something 😎.

Once you have [travis](#Continuous-Integration) and [codecov](#Code-coverage) set up make sure to add their badges on your readme.

You can also create [your own badges](https://shields.io/) to link to any important resources such as your [documentation](#Documentation).

Refer to the badges in this readme for examples.
