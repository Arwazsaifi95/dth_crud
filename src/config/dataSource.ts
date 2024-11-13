import 'reflect-metadata'
import {DataSource } from 'typeorm';
import config from './config';
import { User } from '../entities/user.entity';
import { Channel } from '../entities/channel.entity';
import { Plan } from '../entities/plan.entity';
import { Package } from '../entities/package.entity';
import { Subscription } from '../entities/subscription.entity';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.postgres.host,
    username: config.postgres.username,
    password: config.postgres.password,
    database: config.postgres.database,
    entities: [User,Channel,Plan,Package,Subscription],
    synchronize: false,
    logging: false,
});

export default AppDataSource;
