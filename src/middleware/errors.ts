import { Request, Response, NextFunction } from 'express';

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
    });
};

export default errorHandler;