import { error } from "console";
import { Success, Failure } from "./constants";

export function failureResponse(res: any, statusCode: number, message: string): void {
  res.status(statusCode).json({ status: Failure, message: message });
}

export function successResponse<T>(res: any, statusCode: number, result: T): void {
  res.status(statusCode).json({ status: Success, result });
}

export const generateError = (statusCode: number, message: string) => {
  return {
    error: true,
    statusCode,
    message,
  };
};