import { Router } from "express";
import * as authControler from "../controllers/auth.controller";
import { validateRequest } from "../validators";
import { signupSchema } from "../validators/user.validator";
const router = Router();

router.post(
  "/signup",
  validateRequest(signupSchema),
  authControler.signupController
);
export default router;
