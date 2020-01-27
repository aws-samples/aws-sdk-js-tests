const AWS = require("aws-sdk");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { REGION } = require("./config");

(async () => {
  let response;

  const v2Client = new AWS.DynamoDB({ region: REGION });
  response = await v2Client.listTables().promise();
  console.log("Data returned by v2:");
  console.log(response);

  const v3Client = new DynamoDB({ region: REGION });
  response = await v3Client.listTables({});
  console.log("\nData returned by v3:");
  console.log(response);
})();
