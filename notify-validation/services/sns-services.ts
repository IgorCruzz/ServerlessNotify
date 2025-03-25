import {
    PublishCommand,
    PublishCommandInput,
    SNSClient,
    PublishBatchCommandInput,
    PublishBatchCommand,
} from '@aws-sdk/client-sns';
import { NotifyType } from '../types';

const snsClient = new SNSClient({});

export const NotifyRepository = {
    publishMessage: async (data: NotifyType) => {
        const publishBatchCommandInput: PublishBatchCommandInput = {
            TopicArn: process.env.SNS_TOPIC_ARN,
            PublishBatchRequestEntries: Array.from({ length: 10 }, (_, index) => ({
                Id: `message-${index}`,
                Message: JSON.stringify({
                    userId: index,
                    message: data.message,
                    priority: data.priority,
                }),
                MessageAttributes: {
                    priority: {
                        DataType: 'String',
                        StringValue: data.priority,
                    },
                },
            })),
        };

        const publishCommand = new PublishBatchCommand(publishBatchCommandInput);

        await snsClient.send(publishCommand);

        // const publishCommandInput: PublishCommandInput = {
        //     TopicArn: process.env.SNS_TOPIC_ARN,
        //     Message: JSON.stringify({
        //         userId: data.userId,
        //         message: data.message,
        //         priority: data.priority,
        //     }),
        //     MessageAttributes: {
        //         priority: {
        //             DataType: 'String',
        //             StringValue: data.priority,
        //         },
        //     },
        // };

        // const publishCommand = new PublishCommand(publishCommandInput);

        // await snsClient.send(publishCommand);
    },
};
