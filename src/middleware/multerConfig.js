import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.fieldname + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

export default upload;
