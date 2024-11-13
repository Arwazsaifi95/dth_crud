import { PackageDao } from '../dao/package.dao';

class PackageService {
    private packageDao: PackageDao;

    constructor() {
        this.packageDao = new PackageDao();
    }

    async addPackage(name: string, planIds: string[], channelIds: string[]) {
        return await this.packageDao.addPackage(name, planIds, channelIds);
    }

    async getAllPackages() {
        return await this.packageDao.getAllPackages();
    }

    async getPackageById(id:string){
        return await this.packageDao.getPackageById(id)
    }

}

export const packageService = new PackageService();
