import { body } from "express-validator";

const signUpValidation = [
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().isLength({min:6}).withMessage('password must be 6 char long')
]

const loginValidation = [
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required ')
]

const subscriptionValidator = [
      body('userId').notEmpty().withMessage("user id is required"),
      body('planId').notEmpty().withMessage("plan id is required")
]

export const validationRules = {
    signUpValidation,
    loginValidation,
    subscriptionValidator
}