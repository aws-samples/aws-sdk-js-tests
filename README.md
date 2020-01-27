## aws-sdk-js-tests

Code Sample for testing AWS JS SDK

### Steps to test:

- Fork this repo, and clone your fork
- Create a local branch in your workspace
- Add the code for testing AWS JS SDK v2/v3
- Push code to remote branch on your fork, and share the code for reproducing

### Example test for data returned by ACM client:

- Checkout master branch: `git checkout master`
- Run `yarn` to install dependencies

#### Node.js:

- Run `node src/node.js` to run both v2 and v3 clients in Node.js
- Note that responses returned by clients will be printed in console

#### Browser:

- Run `yarn webpack` to create browser bundle
- Go through the following steps if you don't have resources created
  - [Create a Amazon Cognito Identity pool for testing](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-create-identity-pool)
  - [Add a Policy to the Created test IAM Role](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html#getting-started-browser-iam-role)
  - Update the resources in <config to be added>
- Run `yarn webpack` to create the browser bundle
- Open `index.html` in your browser, and note the responses printed on the page

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
