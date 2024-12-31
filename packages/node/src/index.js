import { REGION, getResponse } from "@aws-sdk/test-utils";

(async () => {
  let response;

  response = await getResponse({ region: REGION });
  console.log("\nData returned:");
  console.log(JSON.stringify(response, null, 2));
})();
