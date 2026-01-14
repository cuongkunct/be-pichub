import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "../common/contant/app.contant.js";

export const tokenService = {
  createTokens(_id) {
    const accessToken = jwt.sign({ id: _id }, ACCESS_TOKEN_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign({ id: _id }, REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  },

  verifyAccessToken(accessToken, option) {
    const decode = jwt.verify(accessToken, ACCESS_TOKEN_SECRET, option);
    return decode;
  },

  verifyRefreshToken(refreshToken) {
    const decode = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    return decode;
  },
};
