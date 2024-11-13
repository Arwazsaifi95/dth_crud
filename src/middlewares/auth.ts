import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRole } from '../utils/enum';

interface AuthRequest extends Request {
    user?: { role: UserRole };
}


function verifyToken(token: string): { role: UserRole } {
    return jwt.verify(token, process.env.JWT_SECRET) as { role: UserRole };
}

function isAuthorized(userRole: UserRole, req: Request): boolean {
    return (
        userRole === UserRole.Admin ||
        (userRole === UserRole.Operator && (req.path.includes('/channels') || req.path.includes('/subscriptions'))) ||
        (userRole === UserRole.User && req.method === 'GET')
    );
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) throw new Error('Unauthorized');

        const decoded = verifyToken(token);
        req.user = decoded;

        if (isAuthorized(req.user.role, req)) {
            next();
        } else {
            res.status(403).json({
                status: 'error',
                data: {},
                message: "Access denied. You do not have permission to access this resource.",
            });
        }
    } catch (error) {
        console.error('Authentication Error:', error.message);
        res.status(401).json({
            status: 'error',
            data: {},
            message: "Unauthorized access, token missing or invalid.",
        });
    }
}
