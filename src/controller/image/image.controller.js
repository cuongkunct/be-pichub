import { imageService } from "../../services/image/image.service.js";

export const imageController = {
  async create(req, res, next) {
    const result = await imageService.create(req);
    const response = responseSuccess(result, `Create image successfully`);
    res.status(response.statusCode).json(response);
  },

  async findAll(req, res, next) {
    const result = await imageService.findAll(req);
    const response = responseSuccess(result, `Get all images successfully`);
    res.status(response.statusCode).json(response);
  },

  async findOne(req, res, next) {
    const result = await imageService.findOne(req);
    const response = responseSuccess(
      result,
      `Get image #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  async update(req, res, next) {
    const result = await imageService.update(req);
    const response = responseSuccess(
      result,
      `Update image #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  async remove(req, res, next) {
    const result = await imageService.remove(req);
    const response = responseSuccess(
      result,
      `Remove image #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
};
