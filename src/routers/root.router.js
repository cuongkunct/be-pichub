import express from "express";
import authRouter from "./auth/auth.route.js";

const rootRouter = express.Router();

// Tạo route CRUD
rootRouter.use("/auth", authRouter);

export default rootRouter;
