import knex from "knex";
import { Request, Response } from "express";
import { db } from "../database/knexfile";
import { generateError, successResponse } from "../utils/response";
import { isEmailTaken } from "../database/validators";
import httpStatus from "http-status";

export const signupService = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return generateError(httpStatus.BAD_REQUEST, "All fields are required");
    }
    if (await isEmailTaken(email)) {
      return generateError(httpStatus.CONFLICT, "Email already taken");
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    await db("users").insert(user);
    return user
  } catch (error: any) {
    return generateError(httpStatus.INTERNAL_SERVER_ERROR, error.message || "An error occurred while creating user");
  }
};
