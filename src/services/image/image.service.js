import cloudinary from "../../common/cloudinary/init.cloudinary.js";
import { FOLDER_IMAGE } from "../../common/contant/app.contant.js";
import { BadRequestException } from "../../common/helper/exception-helper.js";
import commentModel from "../../models/comment.model.js";
import imageModel from "../../models/image.model.js";
import savedModel from "../../models/saved.model.js";

export const imageService = {
  async create(req) {
    const fileName = req.file.originalname.split(".")[0];
    if (!req.file) {
      throw new BadRequestException("Missing required fields");
    }
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: FOLDER_IMAGE,
          },
          (error, uploadResult) => {
            if (error) {
              return reject(error);
            }
            return resolve(uploadResult);
          }
        )
        .end(req.file.buffer);
    });
    console.log(" uploadResult: ", uploadResult);
    const image = new imageModel({
      fileName: fileName,
      url: uploadResult.secure_url,
      description: req.body.description,
    });
    image.user = req.user.id;
    await image.save();
    if (req.user.avatar) {
      cloudinary.uploader.destroy(req.user.avatar);
      const oldPath = path.join(FOLDER_IMAGE, req.user.avatar);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }
    return true;
  },

  async findAll(req) {
    const images = await imageModel.find();
    return images;
  },
  async saveImage(req) {
    const id = req.params.id;
    const image = await savedModel.find({
      image: id,
      user: req.user.id,
    });
    let result = false;
    /*
    if image is saved, delete it
    else save image as (like and unlike image)
    */
    if (image.length > 0) {
      await savedModel.deleteOne({ image: id, user: req.user.id });
      result = false;
    } else {
      const saved = new savedModel({ image: id, user: req.user.id });
      await saved.save();
      result = true;
    }
    return result;
  },
  async getAllComments(req) {
    const imageId = req.params.id;
    const comments = await commentModel
      .find({
        image: imageId,
      })
      .populate("user")
      .populate("image");
    return comments;
  },

  async searchImages(req) {
    const keyword = req.query.key;
    /*
    Find image by fileName or description
    regex: find image by keyword
    i: ignore case
    */
    let images = [];
    if (keyword) {
      images = await imageModel.find({
        $or: [
          { fileName: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      });
    } else {
      images = await imageModel.find();
    }
    return images;
  },

  async findImageById(req) {
    const id = req.params.id;
    const image = await imageModel.findById(id).populate("user");
    return image;
  },

  async removeImage(req) {
    const id = req.params.id;
    const image = await imageModel.deleteOne({ _id: id, user: req.user.id });
    return image;
  },

  async createComment(req) {
    const imageId = req.params.id;
    const userId = req.user.id;
    const content = req.body.content;
    if (!content) {
      throw new BadRequestException("Missing required fields");
    }
    const comment = new commentModel({
      user: userId,
      image: imageId,
      content,
    });
    await comment.save();
    return comment;
  },
};
