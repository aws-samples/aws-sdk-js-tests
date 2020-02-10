const AWS = require("aws-sdk");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

const getV2Response = async clientParams => {
  const client = new AWS.DynamoDB(clientParams);
  return client.listTables().promise();
};

const getV3Response = async clientParams => {
  const client = new DynamoDB(clientParams);
  return client.listTables({});
};

module.exports = {
  getV2Response,
  getV3Response
};
