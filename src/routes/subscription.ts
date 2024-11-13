import { SubscriptionController } from "../controllers/subscription";
import { validationRules } from "../validators/common";
import express from 'express'
const router = express.Router();

router.post('/',validationRules.subscriptionValidator,SubscriptionController.addSubscription)
router.get('/',SubscriptionController.getAllSubscription)



export default router;