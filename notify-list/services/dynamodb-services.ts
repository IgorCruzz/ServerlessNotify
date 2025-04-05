import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput, QueryCommandOutput } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { NotifyType } from '../types';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const DynamoDBService = {
    getAllByUser: async ({ userId }: Pick<NotifyType, 'userId'>) => {
        const params: QueryCommandInput = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            KeyConditionExpression: '#PK = :pk and begins_with(#SK, :sk)',
            ExpressionAttributeNames: {
                '#PK': 'PK',
                '#SK': 'SK',
            },
            ExpressionAttributeValues: {
                ':pk': `USER#${userId}`,
                ':sk': 'NOTIFY#',
            },
        };

        const command = new QueryCommand(params);

        const notifications: QueryCommandOutput = await docClient.send(command);

        return { count: notifications.Count, items: notifications.Items };
    },
};
