import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Plan } from './plan.entity';


@Entity()
export class Subscription {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;

    @Column()
    startDate: Date;

    @Column({ nullable: true })
    endDate: Date;

    @ManyToOne(() => User, user => user.subscriptions)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Plan, plan => plan.subscriptions)
    @JoinColumn({ name: 'planId' })
    plan: Plan;

}