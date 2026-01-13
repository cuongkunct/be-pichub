import express from "express";
import { authController } from "../../controller/auth/auth.controller.js";

const authRouter = express.Router();

// Tạo route CRUD
authRouter.post("/login", authController.userLogin);
authRouter.post("/register", authController.userRegister);

export default authRouter;
