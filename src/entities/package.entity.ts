import { Entity, Column, OneToMany, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Plan } from './plan.entity';
import { Channel } from './channel.entity';

@Entity()
export class Package {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;

    @Column({nullable:false})
    name: string;

    @OneToMany(() => Plan, plan => plan.package)
    plans: Plan[];

    @ManyToMany(() => Channel)
    @JoinTable()
    channels: Channel[];

}