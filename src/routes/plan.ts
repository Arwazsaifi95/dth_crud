import { PlanController } from "../controllers/plan"
import express from 'express'
const router = express.Router();

router.post('/',PlanController.addPlan)
router.get('/',PlanController.getAllplans)
router.get('/:id',PlanController.getPlanById)

export default router;