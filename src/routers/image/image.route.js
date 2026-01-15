import express from "express";
import authMiddleware from "../../middleware/auth.middleware.js";
import { imageController } from "../../controller/image/image.controller.js";
import { uploadMemory } from "../../common/multer/memory.multer.js";

const imageRouter = express.Router();

// Tạo route CRUD
imageRouter.post(
  "/create-post",
  authMiddleware,
  uploadMemory.single("image"),
  imageController.create
);
imageRouter.get("/images", imageController.findAll);
imageRouter.get("/images-search", imageController.searchImages);
imageRouter.get("/:id", imageController.findImageById);
imageRouter.post(
  "/:id/create-comment",
  authMiddleware,
  imageController.createComment
);
imageRouter.get("/:id", imageController.findImageById);
imageRouter.delete("/remove/:id", authMiddleware, imageController.removeImage);
imageRouter.post("/save/:id", authMiddleware, imageController.saveImage);
imageRouter.get("/comments/:id", imageController.getAllComments);
export default imageRouter;
