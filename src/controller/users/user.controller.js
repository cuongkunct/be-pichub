import { responseSuccess } from "../../common/helper/function.helper.js";
import { userService } from "../../services/user/user.service.js";

export const userController = {
  async create(req, res) {
    const result = await userService.create(req);
    const response = responseSuccess(result, `Upload avatar successfully`);
    res.status(response.statusCode).json(response);
  },
  async update(req, res) {
    const result = await userService.update(req);
    const response = responseSuccess(result, `Update user successfully`);
    res.status(response.statusCode).json(response);
  },
  async findOne(req, res, next) {
    const result = await userService.findOne(req);
    const response = responseSuccess(result, `Get user profile successfully`);
    res.status(response.statusCode).json(response);
  },
  async getUserImages(req, res, next) {
    const result = await userService.getUserImages(req);
    const response = responseSuccess(result, `Get user images successfully`);
    res.status(response.statusCode).json(response);
  },
  async getUserSaveImages(req, res, next) {
    const result = await userService.getUserSaveImages(req);
    const response = responseSuccess(
      result,
      `Get user save images successfully`,
    );
    res.status(response.statusCode).json(response);
  },
};
