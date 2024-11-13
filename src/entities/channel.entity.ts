import { Entity, PrimaryColumn, Column, ManyToMany } from 'typeorm';
import { Package } from './package.entity';

@Entity()
export class Channel {
    @PrimaryColumn('uuid', { default: () => 'uuid_generate_v4()' })
    id: string;

    @Column({nullable:false})
    name: string;

    @ManyToMany(() => Package)
    packages: Package[];

}