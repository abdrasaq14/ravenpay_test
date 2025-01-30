import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";
import { failureResponse } from "../utils/response";

export const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Map and join errors into a single string
      const errorMessages = error.details
        .map((err) => err.message) // Get only the error messages
            .join(", ")// Join with a comma separator
        .replace(/['"]+/g, ""); // Remove quotes from the error message

      // Return the error message as a string in the response
      return failureResponse(res, 400, errorMessages);
    }

    next();
  };
};
