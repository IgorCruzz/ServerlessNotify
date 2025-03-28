import { SQSEvent } from 'aws-lambda';
import { SnsService } from './services/sns-services';

export const handler = async (event: SQSEvent): Promise<void> => {
    for (const record of event.Records) {
        try {
            const body = JSON.parse(record.body);
            // const message = JSON.parse(body.Message);

            console.log('Error on send Notification ', body);

            // await SnsService.publishMessage({
            //     message: message.message,
            //     priority: message.priority,
            //     userId: message.userId,
            // });
        } catch (error) {
            console.error(error);
        }
    }
};
