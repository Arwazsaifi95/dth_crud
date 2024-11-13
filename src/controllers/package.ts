import { Request, Response } from 'express';
import { packageService } from '../services/package.service';

export const PackageController = {
    async addPackage(req: Request, res: Response) {
        
        const { name, planIds, channelIds } = req.body;
        console.log(name, planIds, channelIds)
        try {
            const package_data = await packageService.addPackage(name, planIds, channelIds);
            res.status(200).json({
                status: 'success',
                data: package_data,
                message: 'Package added successfully',
            });
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    async getAllPackages(req: Request, res: Response) {
        try {
            const packages = await packageService.getAllPackages();
            res.status(200).json({
                status: 'success',
                data: packages,
                message: 'Packages retrieved successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    async getPackageById(req: Request, res: Response){
       try{
            const {id} =req.params;
            const data = await packageService.getPackageById(id);
            res.status(200).json({
                status: 'success',
                data: data,
                message: ""
            })
       }catch(error){
           console.error(error);
           res.status(200).json({
            status: 'success',
            data: {},
            message: error.message
        })
       }
    }



}
