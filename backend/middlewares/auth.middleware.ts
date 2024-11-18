import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ error: 'No authorization token provided' });
    }

    const token = req.headers.authorization.split(' ')[1]; // Bearer Token

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload;
    } catch (err) {
        return res.status(401).send({ error: 'Not authorized' });
    }

    next();
};

export default authMiddleware;