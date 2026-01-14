import multer from "multer";
import path from "path";
import fs from "fs";
import { FOLDER_IMAGE } from "../contant/app.contant.js";
//Create folder if not exist
fs.mkdirSync(FOLDER_IMAGE, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, FOLDER_IMAGE);
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    console.log({ file, extname });
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = "local" + "-" + uniqueSuffix + extname;
    cb(null, fileName);
  },
});

export const uploadDiskStorage = multer({ storage: storage });
