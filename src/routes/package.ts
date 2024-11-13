import { PackageController } from "../controllers/package";
import express from 'express'
const router = express.Router();

router.post('/',PackageController.addPackage)
router.get('/',PackageController.getAllPackages)
router.get('/:id',PackageController.getPackageById)


export default router;