import jwt from "jsonwebtoken";
import HTTP_STATUS from "./status-code.js";
import { responseError } from "./function.helper.js";

export const errorMiddleware = (err, req, res, next) => {
  console.error("ErrorMiddleware:", err);
  if (err instanceof jwt.JsonWebTokenError) {
    err.code = HTTP_STATUS.UNAUTHORIZED;
  }
  if (err instanceof jwt.TokenExpiredError) {
    err.code = HTTP_STATUS.FORBIDDEN;
  }
  const response = responseError(err?.message, err?.code, err?.stack);
  res.status(response?.statusCode).json(response);
};
