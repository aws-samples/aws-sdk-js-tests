## aws-sdk-js-tests

Code Sample for testing AWS JS SDK

### Steps to test:

- Fork this repo, and clone your fork
- Create a local branch in your workspace
- Update the code for testing AWS JS SDK v2/v3
  - The SDK clients are created and API calls are made in [`src/shared/utils.js`](./src/shared/utils.js)
  - For node.js, edit [`src/node/index.js`](./src/node/index.js)
  - For browser, edit [`src/browser/index.js`](./src/browser/index.js)
  - For react-native, edit [`src/reactnative/App.js`](./src/reactnative/App.js)
- Push code to remote branch on your fork, and share the code for reproducing the issue

### Pre-requisites

- Update REGION in [`src/shared/config.js`](./src/shared/config.js)
- For browser and react-native, IDENTITY_POOL_ID also needs to be updated
  - [Create a Amazon Cognito Identity pool for testing](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-create-identity-pool)
    - Note down IDENTITY_POOL_ID
  - [Add a Policy to the test Unauthenticated IAM Role](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-iam-role)
    - The policy should be specific to the operations you want to test
  - Update the IDENTITY_POOL_ID in [`src/shared/config.js`](./src/shared/config.js)

### Example test for data returned by DynamoDB client:

- Checkout master branch: `git checkout master`
- Run `yarn` to install dependencies

#### Node.js:

- Run `yarn start:node` to run both v2 and v3 clients in Node.js
- The responses returned by clients will be printed in console, and will re-run when code is updated.

#### Browser:

- Run `yarn start:browser` to start webpack-dev-server with HMR
- The bundle will be opened in default browser, and get refreshed when code is updated.

#### React Native:

- Run `yarn start:react-native` to start local development server of Expo CLI
- The Expo Dev Tools will open in default browser with an option to run iOS simulator, Android device/emulator etc.
- The react-native app in simulator/emulator/web will refresh when code is updated.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
