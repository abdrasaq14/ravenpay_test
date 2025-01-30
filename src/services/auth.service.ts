import knex from "knex";
import { Request, Response } from "express";
import { db } from "../database/knexfile";
import { generateError } from "../utils/response";
import { isEmailTaken } from "../database/checkers";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";

export const signupService = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (await isEmailTaken(email)) {
      return generateError(httpStatus.CONFLICT, "Email already taken");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
   const user= await knex("users").insert({
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return user;
  } catch (error: any) {
    return generateError(httpStatus.INTERNAL_SERVER_ERROR, error.message || "An error occurred while creating user");
  }
};
