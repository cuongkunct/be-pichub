import { responseSuccess } from "../../common/helper/function.helper.js";
import { authService } from "../../services/auth/auth.service.js";

export const authController = {
  async userLogin(req, res, next) {
    const result = await authService.userLogin(req);

    const response = responseSuccess(result, `User login successfully`);
    res.status(response.statusCode).json(response);
  },

  async userRegister(req, res, next) {
    const result = await authService.userRegister(req);

    const response = responseSuccess(result, `User register successfully`);
    res.status(response.statusCode).json(response);
  },
};
