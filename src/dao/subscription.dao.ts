import AppDataSource from '../config/dataSource';
import { Subscription } from '../entities/subscription.entity';
import { User } from '../entities/user.entity';
import { Plan } from '../entities/plan.entity';

export class SubscriptionDao {
    private subscriptionRepository = AppDataSource.getRepository(Subscription);
    private userRepository = AppDataSource.getRepository(User);
    private planRepository = AppDataSource.getRepository(Plan);

    async addSubscription(startDate: Date, endDate: Date, userId: string, planId: string): Promise<Subscription> {
        const subscription = this.subscriptionRepository.create({
            startDate: startDate,
            endDate: endDate,
        });

        if (userId) {
            const user = await this.userRepository.findOne({where:{ id: userId}});
            subscription.user = user;
        }

        if (planId) {
            const plan = await this.planRepository.findOne({where:{ id: planId}});
            subscription.plan = plan;
        }

        return await this.subscriptionRepository.save(subscription);
    }

    async getAllSubscription(): Promise<Subscription[]> {
        return await this.subscriptionRepository.find({
            relations: ['user', 'plan'], 
        });
    }
}
