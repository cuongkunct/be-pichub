import express from "express";
import authRouter from "./auth/auth.route.js";
import userRouter from "./users/user.route.js";
import { imageController } from "../controller/image/image.controller.js";
import imageRouter from "./image/image.route.js";

const rootRouter = express.Router();

// Tạo route CRUD
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/image", imageRouter);
export default rootRouter;
