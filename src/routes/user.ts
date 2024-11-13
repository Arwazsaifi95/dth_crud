import { UserController } from "../controllers/user";
import {validationRules} from '../validators/common'
import express from 'express'

const router = express.Router();

router.post('/register',validationRules.signUpValidation,UserController.register)
router.post('/login',validationRules.loginValidation,UserController.login)

export default router;