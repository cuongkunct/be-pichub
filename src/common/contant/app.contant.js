import "dotenv/config";

export const MONGODB_URI = process.env.MONGOODB_CLUSTER || "";

export const FOLDER_IMAGE = "public/images" || "";

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME || "";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
export const PORT = process.env.PORT;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "";
