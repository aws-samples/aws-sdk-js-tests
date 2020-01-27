const AWS = require("aws-sdk");
const { REGION, IDENTITY_POOL_ID } = require("./config");

async function component() {
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

(async () => {
  document.body.appendChild(await component());
})();
