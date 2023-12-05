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

// move this to user routes and apply middleware to this
AuthRouter.get("/", AuthController.getAllUser);
AuthRouter.get("/:userId", AuthController.getSpecificUser);
AuthRouter.put("/:userId", AuthController.updateUser);
AuthRouter.delete("/:userId", AuthController.deleteUser);

export default AuthRouter;
