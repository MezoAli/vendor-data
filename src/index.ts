import AWS from "aws-sdk";
import { dynamodbCreateTable } from "./aws.js";

const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
  TableName: "vendors",
  KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
  AttributeDefinitions: [
    {
      AttributeName: "twitterId",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodbCreateTable(vendorsTableParams);
