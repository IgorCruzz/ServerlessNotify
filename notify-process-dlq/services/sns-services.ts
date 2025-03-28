import { PublishCommand, PublishCommandInput, SNSClient } from '@aws-sdk/client-sns';
import { NotifyType } from '../types';
const snsClient = new SNSClient({});

export const SnsService = {
    publishMessage: async (data: NotifyType) => {
        const publishParams: PublishCommandInput = {
            TopicArn: process.env.SNS_TOPIC_ARN,
            Subject: `Error on send Notification`,
            Message: JSON.stringify({
                message: data.message,
                priority: data.priority,
                userId: data.userId,
            }),
        };

        const publishCommand = new PublishCommand(publishParams);

        await snsClient.send(publishCommand);
    },
};
