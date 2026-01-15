import { responseSuccess } from "../../common/helper/function.helper.js";
import { imageService } from "../../services/image/image.service.js";

export const imageController = {
  async create(req, res, next) {
    const result = await imageService.create(req);
    const response = responseSuccess(result, `Create POST successfully`);
    res.status(response.statusCode).json(response);
  },

  async findAll(req, res, next) {
    const result = await imageService.findAll(req);
    const response = responseSuccess(result, `Get all POST successfully`);
    res.status(response.statusCode).json(response);
  },

  async searchImages(req, res, next) {
    const result = await imageService.searchImages(req);
    const response = responseSuccess(result, `Search POST successfully`);
    res.status(response.statusCode).json(response);
  },

  async findImageById(req, res, next) {
    const result = await imageService.findImageById(req);
    const response = responseSuccess(result, `Get POST details successfully`);
    res.status(response.statusCode).json(response);
  },
  async removeImage(req, res, next) {
    const result = await imageService.removeImage(req);
    const response = responseSuccess(result, `Delete image successfully`);
    res.status(response.statusCode).json(response);
  },

  async createComment(req, res, next) {
    const result = await imageService.createComment(req);
    const response = responseSuccess(result, `Comment POST successfully`);
    res.status(response.statusCode).json(response);
  },
  async getAllComments(req, res, next) {
    const result = await imageService.getAllComments(req);
    const response = responseSuccess(result, `Get all comments successfully`);
    res.status(response.statusCode).json(response);
  },
  async saveImage(req, res, next) {
    const result = await imageService.saveImage(req);
    const response = responseSuccess(
      result,
      `Get save status image successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
