# aws-sdk-js-tests

Code Samples for testing AWS SDK for JavaScript.

## Steps to test:

- Fork this repo, and clone your fork.
- Create a local branch in your workspace.
- Update the code for testing AWS SDK for JavaScript.
  - The SDK clients are created and API calls are made in [`packages/utils/src/utils.js`](./packages/utils/src/utils.js).
- Push code to remote branch on your fork, and share the code for reproducing the issue.

## Pre-requisites

- Run `corepack enable` to let corepack manage version of yarn.
- Update REGION in [`packages/utils/src/config.js`](./packages/utils/src/config.js).
- For browser and react-native, IDENTITY_POOL_ID also needs to be updated.
  - [Create a Amazon Cognito Identity pool for testing](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html#getting-started-browser-create-identity-pool)
    - Note down IDENTITY_POOL_ID
  - [Add a Policy to the test Unauthenticated IAM Role](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html#getting-started-browser-iam-role)
    - The policy should be specific to the operations you want to test
  - Update the IDENTITY_POOL_ID in [`packages/utils/src/config.js`](./packages/utils/src/config.js).

## Example test for data returned by DynamoDB client:

- Checkout main branch: `git checkout main`
- Run `yarn` to install dependencies.

### Node.js:

- Run `yarn start:node` to run SDK clients in Node.js
- The responses returned by clients will be printed in console, and will re-run when code is updated.
- The file being run is at [`packages/node/src/index.js`](./packages/node/src/index.js).

  <details><summary>Click to view Node.js screenshot</summary>
  <p>

  ![screenshot-node](./img/screenshot-node.png)

  </p>
  </details>

### Browser:

- Run `yarn start:web` to start vite server with HMR.
- The bundle will be opened in default browser, and get refreshed when code is updated.
- The file being run is at [`packages/web/src/index.js`](./packages/web/src/index.js).

  <details><summary>Click to view Browser screenshot</summary>
  <p>

  ![screenshot-web](./img/screenshot-web.png)

  </p>
  </details>

### React Native:

- Install [dependencies](https://reactnative.dev/docs/set-up-your-environment#installing-dependencies) for the Development OS and Target OS.

#### iOS

- Run `yarn start:ios` to start local development server with iOS using React Native CLI.

  <details><summary>Click to view iOS screenshot</summary>
  <p>

  ![screenshot-ios](./img/screenshot-ios.png)

  </p>
  </details>

#### Android

- Run `yarn start:android` to start local development server with Android using React Native CLI.

  <details><summary>Click to view Android screenshot</summary>
  <p>

  ![screenshot-android](./img/screenshot-android.png)

  </p>
  </details>

The react-native app in simulator/emulator will refresh when code is updated.
The file being run is at [`packages/react-native/App.js`](./packages/react-native/App.js).

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
