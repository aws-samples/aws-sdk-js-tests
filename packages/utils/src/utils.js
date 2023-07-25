import AWS from "aws-sdk";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
  RekognitionStreamingClient,
  StartFaceLivenessSessionCommand,
} from "@aws-sdk/client-rekognitionstreaming";

import { REGION, IDENTITY_POOL_ID } from "./config.js";

export const getV2Response = async (clientParams) => {
  return Promise.resolve();
};

export const getV3Response = async (clientParams) => {
  const client = new RekognitionStreamingClient(clientParams);
  const foobar = {
    async *[Symbol.asyncIterator]() {
      yield "hello";
      yield "async";
      yield "iteration!";
    },
  };
  const response = await client.send(
    new StartFaceLivenessSessionCommand({
      ChallengeVersions: "FaceMovementAndLightChallenge_1.0.0",
      SessionId: "foobar",
      LivenessRequestStream: foobar,
      VideoWidth: "100",
      VideoHeight: "100",
    })
  );
  return response;
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
        region: "us-east-2",
      }),
      identityPoolId: IDENTITY_POOL_ID,
    }),
    systemClockOffset: -3600000,
  });
