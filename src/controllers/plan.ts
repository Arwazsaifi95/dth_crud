import { Request, Response } from 'express';
import { planService } from '../services/plan.service';

export const PlanController = {
    async addPlan(req: Request, res: Response) {
        const { name, durationMonths, packageId } = req.body;
        try {
            const plan = await planService.addPlan(name, durationMonths, packageId);
            res.status(200).json({
                status: 'success',
                data: plan,
                message: 'Plan added successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: {},
                message: error.message,
            });
        }
    },

    async getAllplans(req: Request, res: Response) {
        try {
            const plans = await planService.getAllplans();
            res.status(200).json({
                status: 'success',
                data: plans,
                message: 'plans retrieved successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: {},
                message: error.message,
            });
        }
    },

 async getPlanById(req:Request, res:Response){
   try{
    const {id} = req.params;
    const plan = await planService.getPlanById(id);
    res.status(200).json({
        status: 'success',
        data: plan,
        message: 'plans retrieved successfully',
    });
   }
   catch(error){
    res.status(500).json({
        status: 'error',
        data: {},
        message: error.message,
    });
   }
 }


}
