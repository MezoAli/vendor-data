import {
  DynamoDBClient,
  CreateTableCommand,
  DescribeTableCommand,
  DeleteTableCommand,
  PutItemCommand,
  CreateTableCommandInput,
  DescribeTableCommandOutput,
  DeleteTableCommandOutput,
  PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { AWSRegions } from "./types/aws.js";
import { Vendor } from "./types/twitter.js";

// Initialize the DynamoDB client
const dynamoDB = new DynamoDBClient({ region: AWSRegions.US_EAST_1 });

export const dynamodbCreateTable = async (
  params: CreateTableCommandInput
): Promise<DescribeTableCommandOutput> => {
  try {
    const command = new CreateTableCommand(params);
    const result = await dynamoDB.send(command);
    return result;
  } catch (error) {
    throw error;
  }
};

export const dynamodbDescribeTable = async (
  tableName: string
): Promise<DescribeTableCommandOutput> => {
  try {
    const command = new DescribeTableCommand({ TableName: tableName });
    const result = await dynamoDB.send(command);
    return result;
  } catch (error) {
    throw error;
  }
};

export const dynamodbDeleteTable = async (
  tableName: string
): Promise<DeleteTableCommandOutput> => {
  try {
    const command = new DeleteTableCommand({ TableName: tableName });
    const result = await dynamoDB.send(command);
    return result;
  } catch (error) {
    throw error;
  }
};

export const dynamodbCreateRecord = async (
  tableName: string,
  vendor: Vendor
): Promise<PutItemCommandOutput> => {
  try {
    const command = new PutItemCommand({
      TableName: tableName,
      Item: marshall(vendor) as any,
    });
    const result = await dynamoDB.send(command);
    return result;
  } catch (error) {
    throw error;
  }
};
