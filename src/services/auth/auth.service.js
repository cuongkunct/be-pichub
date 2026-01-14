import userModel from "../../models/user.model.js";
import bcrypt from "bcrypt";
import { tokenService } from "../jwt.services.js";
import {
  BadRequestException,
  NotFoundException,
} from "../../common/helper/exception-helper.js";

export const authService = {
  async userLogin(req) {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    const isPasswordValie = bcrypt.compareSync(password, user.password);
    if (!isPasswordValie) {
      throw new BadRequestException("Invalid password");
    }
    const { accessToken, refreshToken } = tokenService.createTokens(user._id);
    return { accessToken: accessToken, refreshToken: refreshToken };
  },

  async userRegister(req) {
    const { email, password, fullName, age } = req.body;
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      throw new BadRequestException("Email already exists");
    }
    if (!email || !password || !fullName || !age) {
      throw new BadRequestException("Missing required fields");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new userModel({
      email,
      password: hashedPassword,
      fullName,
      age,
    });
    const result = await newUser.save();
    const objectResult = result.toObject();
    delete objectResult.password; // remove password
    return objectResult;
  },
};
