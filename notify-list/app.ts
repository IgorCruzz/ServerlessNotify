import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { DynamoDBService } from './services/dynamodb-services';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const { userId } = event.pathParameters as { userId: string };

        const notifications = await DynamoDBService.getAllByUser({ userId });

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Notificações obtidas com sucesso',
                notifications,
            }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal server error',
            }),
        };
    }
};
