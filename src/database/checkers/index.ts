import { db } from "../knexfile";

/**
 * Check if an email is already taken in the users table.
 * @param email - The email to check.
 * @returns {Promise<boolean>} - True if email exists, false otherwise.
 */
export const isEmailTaken = async (email: string): Promise<boolean> => {
  const user = await db("users").where({ email }).first();
  return !!user; // Returns true if user exists, otherwise false
};
