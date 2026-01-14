import express from "express";
import authRouter from "./auth/auth.route.js";
import userRouter from "./users/user.route.js";

const rootRouter = express.Router();

// Tạo route CRUD
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
export default rootRouter;
