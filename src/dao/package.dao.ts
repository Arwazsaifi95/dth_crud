import AppDataSource from '../config/dataSource';
import { Channel } from '../entities/channel.entity';
import { Package } from '../entities/package.entity';
import { Plan } from '../entities/plan.entity';

export class PackageDao {
    private packageRepository = AppDataSource.getRepository(Package);

    async addPackage(name: string, planIds: string[], channelIds: string[]): Promise<Package> {
        const package_data = this.packageRepository.create({
            name: name,
        });
        if (planIds) {
            const plans = await AppDataSource.getRepository(Plan).find({
                where: planIds.map((id) => ({ id })),
            });
            package_data.plans = plans;
        }

        if (channelIds) {
            const channels = await AppDataSource.getRepository(Channel).find({
                where: channelIds.map((id) =>({id}))
            });
            package_data.channels = channels;
        }

        return await this.packageRepository.save(package_data);
    }

    async getAllPackages(): Promise<Package[]> {
        return await this.packageRepository.find();
    }

    async getPackageById(id:string): Promise<Package>{
        const data = await this.packageRepository.findOne({where:{id:id}})
        return data;
    }

}
