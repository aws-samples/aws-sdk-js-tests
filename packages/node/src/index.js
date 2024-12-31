import { REGION, getV3Response } from "@aws-sdk/test-utils";

(async () => {
  let response;

  response = await getV3Response({ region: REGION });
  console.log("\nData returned by v3:");
  console.log(JSON.stringify(response, null, 2));
})();
