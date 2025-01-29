import { Request, Response } from "express";
import { successResponse, failureResponse } from "../utils/response";
import { signupService } from "../services/auth.service";

export const signupController = async (req: Request, res: Response) => { 
    try {
        const user = await signupService(req, res);
        if ('error' in user) { 
            return failureResponse(res, user.statusCode, user.message);
        }
        successResponse(res, 201, user);
    } catch (error: any) {
        failureResponse(res, error.statusCode, error.message);
    }
}