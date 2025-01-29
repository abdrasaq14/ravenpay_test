import bcrypt from "bcryptjs";
const saltRounds = 10;  
export const encrypt = (otp: any) => {
  return bcrypt.hashSync(otp, saltRounds);
};

export const isValidEmail = (email: string) => { 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export const Success = "Success";
export const Failure = "Fail";