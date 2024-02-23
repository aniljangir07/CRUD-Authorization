import { Router } from "express";
import {registerUser, loginUser} from "../controllers/user_controller.js";
const router = Router();

// Route is for add task
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;