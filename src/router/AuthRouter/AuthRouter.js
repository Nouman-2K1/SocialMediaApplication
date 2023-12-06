import { Router } from "express";
import AuthController from "../../controller/Auth/AuthControler.js";
import AuthValidator from "../../validator/AuthValidator/AuthValidator.js";
const AuthRouter = Router();

AuthRouter.post(
  "/register/",
  AuthValidator.validateRegisterUser,
  AuthController.registerUser
);
AuthRouter.post("/login/", AuthController.loginUser);

export default AuthRouter;
