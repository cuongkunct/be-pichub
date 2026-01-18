import e from "express";
import { tokenService } from "../services/jwt.services.js";
import { UnauthorizedException } from "../common/helper/exception-helper.js";
import userModel from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    throw new UnauthorizedException("Unauthorized");
  }
  const user = tokenService.verifyAccessToken(token);

  if (!user) {
    throw new UnauthorizedException("Unauthorized");
  }
  const userExist = await userModel.findById(user.id);
  if (!userExist) {
    throw new UnauthorizedException("Unauthorized");
  }
  req.user = user;
  next();
};

export default authMiddleware;
