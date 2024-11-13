import { SubscriptionDao } from "../dao/subscription.dao";


class SubscriptionService {
    private subscriptionDao: SubscriptionDao;

    constructor() {
        this.subscriptionDao = new SubscriptionDao();
    }

    async addSubscription(startDate: Date, endDate: Date, userId: string, planId: string) {
        return await this.subscriptionDao.addSubscription(startDate, endDate, userId, planId);
    }

    async getAllSubscription() {
        return await this.subscriptionDao.getAllSubscription();
    }
}

export const subscriptionService = new SubscriptionService();
