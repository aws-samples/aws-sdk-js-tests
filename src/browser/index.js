const AWS = require("aws-sdk");

const {
  fromCognitoIdentityPool
} = require("@aws-sdk/credential-provider-cognito-identity");
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");

const { getV2Response, getV3Response } = require("../shared/utils");
const { REGION, IDENTITY_POOL_ID } = require("../shared/config");

const getHTMLElement = (title, content) => {
  const element = document.createElement("div");
  element.style.margin = "30px";

  const titleDiv = document.createElement("div");
  titleDiv.innerHTML = title;
  const contentDiv = document.createElement("textarea");
  contentDiv.rows = 20;
  contentDiv.cols = 50;
  contentDiv.innerHTML = content;

  element.appendChild(titleDiv);
  element.appendChild(contentDiv);

  return element;
};

const componentV2 = async () => {
  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = REGION;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID
  });
  const response = await getV2Response({ region: REGION });

  return getHTMLElement(
    "Data returned by v2:",
    JSON.stringify(response, null, 2)
  );
};

const componentV3 = async () => {
  const response = await getV3Response({
    region: REGION,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({
        region: REGION
      }),
      identityPoolId: IDENTITY_POOL_ID
    })
  });

  return getHTMLElement(
    "Data returned by v3:",
    JSON.stringify(response, null, 2)
  );
};

(async () => {
  document.body.appendChild(await componentV2());
  document.body.appendChild(await componentV3());
})();
