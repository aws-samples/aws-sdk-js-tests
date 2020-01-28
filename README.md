## aws-sdk-js-tests

Code Sample for testing AWS JS SDK

### Steps to test:

- Fork this repo, and clone your fork
- Create a local branch in your workspace
- Add the code for testing AWS JS SDK v2/v3
- Push code to remote branch on your fork, and share the code for reproducing

### Example test for data returned by DynamoDB client:

- Checkout master branch: `git checkout master`
- Run `yarn` to install dependencies

#### Node.js:

- Update REGION in [`src/config.js`](./src/config.js)
- Run `node src/node.js` to run both v2 and v3 clients in Node.js
- Note that responses returned by clients will be printed in console

#### Browser:

- Go through the following steps if you don't have resources created
  - [Create a Amazon Cognito Identity pool for testing](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-create-identity-pool)
    - Note down REGION and IDENTITY_POOL_ID
  - [Add a Policy to the test Unauthenticated IAM Role](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-iam-role)
    - The policy should be specific to the operations you want to test
  - Update the REGION and IDENTITY_POOL_ID in [`src/config.js`](./src/config.js)
- Run `yarn watch` to create the browser bundle and watch for changes
- Open `index.html` in your browser, and note the responses printed on the page
- The command will watch for changes in files, and update bundle. Reload the webpage to view the changes applied.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
