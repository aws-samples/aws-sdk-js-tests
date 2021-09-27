import AWS from "aws-sdk";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { S3 } from "@trivikr-test/client-s3";

import { REGION, IDENTITY_POOL_ID } from "./config.js";

export const getV2Response = async (clientParams) => {
  const client = new AWS.S3(clientParams);
  return client.getBucketCors({ Bucket: "temp-client-s3-test-e2e" }).promise();
};

export const getV3Response = async (clientParams) => {
  const client = new S3(clientParams);
  return client.getBucketCors({ Bucket: "temp-client-s3-test-e2e" });
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
