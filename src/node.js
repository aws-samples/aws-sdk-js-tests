const AWS = require("aws-sdk");
const { ACM } = require("@aws-sdk/client-acm");

(async () => {
  let response;
  const region = "us-west-2";

  const v2Client = new AWS.ACM({ region });
  response = await v2Client.listCertificates().promise();
  console.log("Data returned by v2:");
  console.log(response);

  const v3Client = new ACM({ region });
  response = await v3Client.listCertificates({});
  console.log("\nData returned by v3:");
  console.log(response);
})();
