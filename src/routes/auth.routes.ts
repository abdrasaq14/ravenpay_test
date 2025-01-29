import { Router } from 'express';
import * as authControler from '../controllers/auth.controller'


const router = Router();

router.post('/signup', authControler.signupController);
export default router;
