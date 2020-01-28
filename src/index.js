const AWS = require("aws-sdk");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const {
  fromCognitoIdentityPool
} = require("@aws-sdk/credential-provider-cognito-identity");
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const { REGION, IDENTITY_POOL_ID } = require("./config");

async function componentV2() {
  const element = document.createElement("div");

  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = REGION;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID
  });
  const v2Client = new AWS.DynamoDB();
  const response = await v2Client.listTables().promise();
  element.innerHTML = `Data returned by v2: ${JSON.stringify(response)}!`;

  return element;
}

async function componentV3() {
  const element = document.createElement("div");

  // Initialize the Amazon Cognito credentials provider
  const v3Client = new DynamoDB({
    region: REGION,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({
        region: REGION,
        credentials: () => Promise.resolve({})
      }),
      identityPoolId: IDENTITY_POOL_ID
    })
  });
  console.log(v3Client);
  const response = await v3Client.listTables({});
  element.innerHTML = `Data returned by v3: ${JSON.stringify(response)}!`;

  return element;
}

(async () => {
  document.body.appendChild(await componentV2());
  document.body.appendChild(await componentV3());
})();
