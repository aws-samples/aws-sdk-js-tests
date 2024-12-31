import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

import { REGION, IDENTITY_POOL_ID } from "./config.js";

export const getResponse = async (clientParams) => {
  const client = new DynamoDB(clientParams);
  return client.listTables({ Limit: 1 });
};

export const getBrowserResponse = async () =>
  getResponse({
    region: REGION,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({
        region: REGION,
      }),
      identityPoolId: IDENTITY_POOL_ID,
    }),
  });
