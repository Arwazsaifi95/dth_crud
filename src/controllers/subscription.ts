import { Request, Response } from 'express';
import { subscriptionService } from '../services/subscription.service';
import { validationResult } from 'express-validator';

export const SubscriptionController = {
    async addSubscription(req: Request, res: Response) {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({
                    status: "error",
                    errors: error.array(),
                    message: "validation failed"
                })
            }
            const { userId, planId } = req.body;
            const startDate = new Date();
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 30);

            const subscription = await subscriptionService.addSubscription(startDate, endDate, userId, planId);
            res.status(200).json({
                status: 'success',
                data: subscription,
                message: 'Subscription added successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: {},
                message: error.message,
            });
        }
    },

    async getAllSubscription(req: Request, res: Response) {
        try {
            const subscription = await subscriptionService.getAllSubscription();
            res.status(200).json({
                status: 'success',
                data: subscription,
                message: 'subscription retrieved successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: {},
                message: error.message,
            });
        }
    },
}
