import { responseSuccess } from "../../common/helper/function.helper.js";
import { userService } from "../../services/user/user.service.js";

export const userController = {
  async create(req, res) {
    const result = await userService.create(req);
    const response = responseSuccess(result, `Upload avatar successfully`);
    res.status(response.statusCode).json(response);
  },

  async findAll(req, res) {
    const result = await userService.findAll(req);
    const response = responseSuccess(result, `Get all users successfully`);
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
};
