import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Subscription } from './subscription.entity';
import { Package } from './package.entity';

@Entity()
export class Plan {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;
    @Column({nullable:false})
    name: string;

    @Column({nullable:false})
    durationMonths: number;

    @OneToMany(() => Subscription, subscription => subscription.plan)
    subscriptions: Subscription[];

    @ManyToOne(() => Package, pkg => pkg.plans)
    @JoinColumn({ name: 'packageId' })
    package: Package;

}