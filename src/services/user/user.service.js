import { FOLDER_IMAGE } from "../../common/contant/app.contant.js";
import { BadRequestException } from "../../common/helper/exception-helper.js";
import userModel from "../../models/user.model.js";
import cloudinary from "../../common/cloudinary/init.cloudinary.js";
import imageModel from "../../models/image.model.js";
import savedModel from "../../models/saved.model.js";
import bcrypt from "bcrypt";
export const userService = {
  async create(req) {
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
          },
        )
        .end(req.file.buffer);
    });

    await userModel.updateOne(
      { _id: req.user.id },
      {
        $set: {
          avatar: uploadResult.secure_url,
        },
      },
    );
    if (req.user.avatar) {
      cloudinary.uploader.destroy(req.user.avatar);
      const oldPath = path.join(FOLDER_IMAGE, req.user.avatar);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }
    return true;
  },

  async update(req) {
    const { password, fullName, age } = req.body;

    if (!password || !fullName || !age) {
      throw new BadRequestException("Missing required fields");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    await userModel.updateOne(
      { _id: req.user.id },
      {
        $set: {
          password: hashedPassword,
          fullName,
          age,
        },
      },
    );
    return true;
  },

  async findOne(req) {
    const users = await userModel.findById(req.user.id);
    const userObject = users.toObject();
    delete userObject.password;
    return userObject;
  },

  async getUserImages(req) {
    const userId = req.user.id;
    const images = await imageModel.find({ user: userId }).populate("user");
    return images;
  },
  async getUserSaveImages(req) {
    const userId = req.user.id;
    const images = await savedModel
      .find({ user: userId })
      .populate("user")
      .populate("image");
    return images;
  },
};
