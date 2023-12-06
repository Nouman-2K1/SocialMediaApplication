import ImageController from "../../controller/ImageController/ImageController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";
import { Router } from "express";
import upload from "../../middleware/multerConfig.js";

const ImageRouter = Router();

ImageRouter.post(
  "/upload",
  upload.single("image"),
  AuthenticateMiddleware,
  ImageController.uploadImage
);

export default ImageRouter;
