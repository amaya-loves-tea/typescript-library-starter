[//]: # 'Change this heading to your package name'

# Typescript Library Starter

[//]: # 'Change all occurrences of `/typescript-library-starter` in the badges to YOUR_PACKAGE_NAME'
[//]: # 'Change all occurrences of `amaya-loves-tea` in the badges to your USERNAME'
[//]: # 'Remove all occurrences of `@teasenshi/` in the npm badge or change to the name of your npm org'

[![greenkeeper: enabled](https://badges.greenkeeper.io/amaya-loves-tea/typescript-library-starter.svg)](https://greenkeeper.io/)
[![build: status](https://travis-ci.org/amaya-loves-tea/typescript-library-starter.svg?branch=master)](https://travis-ci.org/amaya-loves-tea/typescript-library-starter)
[![codecov: percent](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/amaya-loves-tea/typescript-library-starter)
[![commitizen: friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://semantic-release.gitbook.io/semantic-release/)
[![linter: eslint](https://img.shields.io/badge/linter-eslint-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![docs: gh-pages](https://img.shields.io/badge/docs-gh--pages-blue.svg)](https://amaya-loves-tea.github.io/typescript-library-starter/)
[![npm (scoped)](https://img.shields.io/npm/v/@teasenshi/typescript-library-starter?label=npm%20package)](https://www.npmjs.com/package/@teasenshi/typescript-library-starter)

[//]: # 'Change this line to your package description'

This project provides the boilerplate for starting a typescript library to be hosted on [npm](https://www.npmjs.com/).

[//]: # 'Remove this section (Prerequisites) or change it to suit your repository'

## Prerequisites

You will require the following to make use of this boilerplate.

1. [Github](https://github.com/) account.
1. [Node.js](https://nodejs.org/en/) installed on your local machine and optionally yarn.
1. [Git](https://git-scm.com/) installed on your local machine.
1. An IDE with javascript/typescript support.

## Recommended IDE

You should be using [Visual Studio Code](https://code.visualstudio.com/) because its simple, fast, extensible and beloved by many developers.

Make sure to install all the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) that come with the repository for the best possible coding experience.

[//]: # 'Remove this section (Quick Start) or change it to suit your repository'

## Quick Start

If you are not using a [npm org](https://docs.npmjs.com/orgs/) it may be a good idea to check if your intended package name is available on the [npm registry](https://www.npmjs.com/) before starting these steps.

### GitHub

1. Create an empty repository for your package on [github](https://github.com/) naming it according to your intended package name.

### Local setup

1. Clone the boilerplate using `git clone https://github.com/amaya-loves-tea/typescript-library-starter.git YOUR_PACKAGE_NAME`.

1. Delete the .git folder as you don't want my history.

1. Install dependencies with `yarn` or `npm install`.

1. `package.json` - Change `name`, `description`, `repository` and `author` information.

1. `.travis.yml` - Change the `-r` parameter of `yarn doc:publish` command to point to your repository but keep the `$GH_TOKEN` within the url for e.g `https://$GH_TOKEN@github.com/USERNAME/YOUR_PACKAGE_NAME.git`

1. `readme.md` - There are comments in this readme indicating what you need to change in this file.
   They look something like this `[//]: # 'COMMENT HERE'`.
   Alternatively you can also use the following directions.

   1. Change first heading to `YOUR_PACKAGE_NAME`.
   1. Badge urls
      - Change all repository urls to point to your repository.
      - Change `@teasenshi/` to your npm org or if your are not using a npm org remove it from the urls.
      - Make sure all occurrences of `amaya-loves-tea` are changed to your USERNAME.
        > These badges will stop working but it will be fixed in following sections.
   1. Change the description under the badges to your package description.
   1. Update the [npm scripts](#NPM-Scripts) section to remove notes about registering for certain services.
   1. Delete [quick start](#Quick-Start), [prerequisites](#Prerequisites) and all sections after [debugging](#Debugging) as they are specific to the boilerplate.
   1. Delete all comments in the readme.

1. Git setup instructions

   1. `git init` - create an empty repository.
   1. `git add .` - stage all files.
   1. `git commit -m "chore(repository): initial commit"` - commit staged files with a conventional commit message (more on that later).
   1. `git remote add origin https://github.com/USER_NAME/YOUR_REPOSITORY_NAME.git` - add a remote to the repository you created earlier.
   1. `git push --set-upstream origin master` - push your initial commit to the remote (github).

> If you forget to do something that you should have done before your initial commit then you can redo it by:
>
> 1. Making your changes.
> 1. Deleting the .git folder.
> 1. Redoing the steps described above in _Git setup instructions_. However when pushing add the `--force` flag to override your initial commit for e.g `git push --set-upstream origin master --force`.

### External Services

Now it's time to fix all the readme badges and set up your build pipeline.

#### Codecov

[Codecov](https://codecov.io/) is a service that integrates into various tools, hosts your code coverage reports and is free for public repositories.

1. Login or sign up to codecov using your github account.

1. At https://codecov.io/gh/YOUR_USERNAME choose add repository and add your new repository.

1. Ignore the upload token unless you want to publish coverage reports outside your [CI](#Travis-CI) environment.

#### Travis CI

[Travis CI](https://travis-ci.org/) is a [continuous integration](https://www.thoughtworks.com/continuous-integration) service where you can create a ci build pipeline and is free for public repositories.

> The build pipeline configured with this repository will:
>
> - Test your code and on success perform the following actions
>   - Generate and publish your docs to [github pages](https://pages.github.com/).
>   - Generate and publish a code coverage report to [codecov](https://codecov.io/).
>   - Generate and publish a release on [github](https://github.com/) and [npm](https://www.npmjs.com/) using [semantic release](https://github.com/semantic-release/semantic-release)

1. Sign in and authorize travis with your github account.
1. Activate your new repository [here](https://travis-ci.org/account/repositories).
1. In https://travis-ci.org/USERNAME/YOUR_PACKAGE_NAME/settings:
   1. Create a [github personal access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) with repo access and add it to your environment variables as `GH_TOKEN` with master branch access only.
   1. Create a [npm authentication token](https://docs.npmjs.com/creating-and-viewing-authentication-tokens) with publish access and add it to your environment variables as `NPM_TOKEN` with master branch access only.
      > The above tokens are for [semantic release](https://github.com/semantic-release/semantic-release) so it can publish your package on [npm](https://www.npmjs.com/).
   1. Trigger your first build from the [dashboard](https://travis-ci.org/dashboard) which will make your build badge green but not yet deploy your package.

> Pushes to the master branch will now automatically run your CI pipeline. You can configure the pipeline using the `.travis.yml` file.

#### Greenkeeper

[Greenkeeper](https://greenkeeper.io/) provides safety and consistency with real-time monitoring and automatic updates your dependencies.

1. Register on greenkeeper and authorize it with your github account.
1. Follow the steps on their [documentation](https://greenkeeper.io/docs.html) to enable greenkeeper on your repository.

### Reference Repository

See the first commit on this [repository](https://github.com/amaya-loves-tea/fission/commits/master) as a reference to the above steps.

## NPM Scripts

Note that these examples use yarn but you can use the equivalent `npm run <command>` instead.

Most of them will automatically run when you perform certain actions on your repository.

### Code style

Ensures code consistency in your code base.

These commands automatically get run before commits.

- `yarn style` - Runs all style:\* commands.
- `yarn style:lint` - Lints your code using [eslint](https://github.com/typescript-eslint/typescript-eslint).
- `yarn style:format` - Formats your code using [prettier](https://prettier.io/).

### Build Tasks

Creates builds from your Typescript files for [CommonJS (cjs)](https://flaviocopes.com/commonjs/) and [ES6 modules (esm)](https://exploringjs.com/es6/ch_core-features.html#sec_from-cjs-to-esm).

- `yarn build` - Runs all build commands which creates builds for different node environments.
- `yarn build:main` - Creates a build using cjs modules.
- `yarn build:module` - Creates a build using esm modules.

### Testing

Ensures code is reliable by running your [jest](https://jestjs.io/en/) unit tests.

Unit tests automatically get run before commits.

- `yarn test` - Runs all tests and generates a code coverage report.
- `yarn test:watch` - Watches file changes and reruns tests for those changed files.

### Code Coverage

Generates and publishes documentation based on your [typedoc](https://typedoc.org/) comments.

[//]: # 'Remove the following line'

If you sign up to [travis](#Continuous-Integration) and [codecov](https://codecov.io/) these reports automatically get published after successful builds.

- `yarn cov` - Generate a code coverage report.
- `yarn cov:open` - Open generated code coverage report.
- `yarn cov:publish` - Publish generated code coverage reports to [codecov](https://codecov.io/).
  Running this command locally will require the upload token for e.g `yarn cov:publish --token="YOUR_TOKEN_HERE"`

### Documentation

Generate and publishing documentation based on your [typedoc](https://typedoc.org/) comments.

[//]: # 'Remove the following line'

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

No one likes rejection so use the `yarn commit` script which provides a CLI interface for creating formated commits.

## Git Hooks

If you would like to run custom tasks during important actions on a repository you can use [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

To make this as simple as possible we use [husky](https://github.com/typicode/husky) which is also used in the [conventional commits toolchain](#Conventional-Commits).

## Debugging

The following [launch configurations](https://code.visualstudio.com/docs/editor/debugging) will assist with debugging your library.

- `Current TS File` - debug current typescript file.
- `Current Jest Test` - debug current jest test.
- `All Jest Tests` - debug all jest tests.

[//]: # 'Remove all sections after and including this comment'

## Special Sauce

Collect many [badges](https://www.freecodecamp.org/news/how-to-use-badges-to-stop-feeling-like-a-noob-d4e6600d37d2/) to give your readme that that special something something 😎.

You can also create [your own badges](https://shields.io/) to link to any important resources such as your documentation.

Refer to the badges in this readme for examples.
