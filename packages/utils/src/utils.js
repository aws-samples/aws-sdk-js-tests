import AWS from "aws-sdk";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

import { REGION, IDENTITY_POOL_ID } from "./config.js";

export const getV2Response = async (clientParams) => {
  const client = new AWS.DynamoDB(clientParams);
  return client.listTables({ Limit: 1 }).promise();
};

export const getV3Response = async (clientParams) => {
  const client = new DynamoDB(clientParams);
  return client.listTables({ Limit: 1 });
};

export const getV2BrowserResponse = async () => {
  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = REGION;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IDENTITY_POOL_ID,
  });

  return getV2Response({ region: REGION });
};

export const getV3BrowserResponse = async () =>
  getV3Response({
    region: REGION,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({
        region: REGION,
      }),
      identityPoolId: IDENTITY_POOL_ID,
    }),
  });
