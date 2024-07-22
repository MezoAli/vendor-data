import AWS from "aws-sdk";
import { AWSRegions } from "./types/aws.js";

AWS.config.update({ region: AWSRegions.US_EAST_1 });

const { DynamoDB } = AWS;

const dynamoDB = new DynamoDB();

export const dynamodbCreateTable = async (
  params: AWS.DynamoDB.CreateTableInput
) => {
  try {
    const result = await dynamoDB.createTable(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};
