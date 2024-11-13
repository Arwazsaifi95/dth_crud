import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { validationResult } from 'express-validator';

export const UserController = {
    async register(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                status: "error",
                errors: error.array(),
                message: "validation failed"
            })
        }
        const { username, password, role } = req.body;
        try {
            const user = await userService.createUser(username, password, role);
            res.status(200).json({
                status: 'success',
                data: user,
                message: 'User registered succesffuly',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    },

    async login(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error!.isEmpty()) {
            return res.status(400).json({
                status: "error",
                errors: error.array(),
                message: "validation failed"
            })
        }
        const { username, password } = req.body;
        try {
            const token = await userService.login(username, password);
            res.status(200).json({
                status: 'success',
                token: token,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                data: null,
                message: error.message,
            });
        }
    }
};