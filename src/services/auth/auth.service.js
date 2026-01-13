import userModel from "../../models/user.model.js";
import bcrypt from "bcrypt";

export const authService = {
  async userLogin(req) {
    console.log(req.body);
    return `This action create`;
  },

  async userRegister(req) {
    const { email, password, fullName, age } = req.body;
    console.log({ email, password, fullName, age });
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return "User already exists";
    }
    if (!email || !password || !fullName || !age) {
      return "Missing required fields";
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new userModel({
      email,
      password: hashedPassword,
      fullName,
      age,
    });
    const result = await newUser.save();
    return result;
  },
};
