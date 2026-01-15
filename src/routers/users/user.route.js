import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import { userController } from "../../controller/users/user.controller.js";
import { uploadMemory } from "../../common/multer/memory.multer.js";

const userRouter = express.Router();

userRouter.post(
  "/upload-avatar",
  authMiddleware,
  uploadMemory.single("avatar"),
  userController.create
);

userRouter.post("/edit-profile", authMiddleware, userController.update);
userRouter.post("/profile", authMiddleware, userController.findOne);
userRouter.get("/images", authMiddleware, userController.getUserImages);
userRouter.get(
  "/saved-images",
  authMiddleware,
  userController.getUserSaveImages
);
export default userRouter;
