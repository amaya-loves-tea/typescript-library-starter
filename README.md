# Typescript Library Starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

## Recommended Editor

[Visual Studio Code](https://code.visualstudio.com/) is simple, fast, extensible and beloved by many developers.

As such this project has been set up with rich support for it.

This includes things such as recommended extensions, code format settings etc.

## [Conventional Commits](https://www.conventionalcommits.org/en/)

You cannot count on other developers to follow your commit message conventions.

As such this project contains a [toolchain](https://medium.com/@klauskpm/how-to-create-good-commit-messages-67943d30cced) for ensuring contributors follow a convention.

Any commit message not conforming to conventional commit guidelines will be rejected.

To assist with creating these commits you can use the `yarn commit` script which will bring up a helpful CLI using [commitizen](https://github.com/commitizen/cz-cli).

## Git Hooks

If you would like to run custom tasks during important actions you can use [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To make this as simple as possible we use [husky](https://github.com/typicode/husky) which is also used in the [conventional commits tool-chain](#Conventional-Commits).

Simply add your task to run in the .huskyrc.json file.
