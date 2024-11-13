import { PlanDao } from "../dao/plan.dao";

class PlanService {
    private planDao: PlanDao;

    constructor() {
        this.planDao = new PlanDao();
    }

    async addPlan(name: string, durationMonths: number, packageId: string) {
        return await this.planDao.addPlan(name, durationMonths, packageId);
    }

    async getAllplans() {
        return await this.planDao.getAllplans();
    }

    async getPlanById(id:string){
        const plan = await this.planDao.getPlanById(id)
        if(!plan) throw new Error(`plan with ${id} not exist`)
        return plan
    }
}

export const planService = new PlanService();
