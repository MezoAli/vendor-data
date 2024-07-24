import AWS from "aws-sdk";
import {
  dynamodbCreateRecord,
  dynamodbCreateTable,
  dynamodbDeleteTable,
  dynamodbDescribeTable,
} from "./aws.js";
import { CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
import vendors from "./data/vendors.js";

const delay = (ms: number) => {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
};

const vendorsTableParams: CreateTableCommandInput = {
  TableName: "vendors",
  KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
  AttributeDefinitions: [
    {
      AttributeName: "twitterId",
      AttributeType: "S",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const init = async () => {
  const tableName = "vendors";
  const vendorsTable = await dynamodbDescribeTable(tableName);
  if (!(vendorsTable instanceof Error)) {
    await dynamodbDeleteTable(tableName);
    await delay(6000);
  }
  await dynamodbCreateTable(vendorsTableParams);
  await delay(6000);
  for (const i in vendors) {
    const vendor = vendors[i];
    const record = await dynamodbCreateRecord(tableName, vendor);
    if (record instanceof Error) {
      console.log(record, vendor);
    }
    console.log("record created");
  }
};

init();
