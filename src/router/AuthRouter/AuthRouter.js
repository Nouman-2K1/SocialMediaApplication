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
AuthRouter.get("/allUsers/", AuthController.getAllUser);
AuthRouter.get("/searchUsers/:userId", AuthController.getSpecificUser);
AuthRouter.put("/updateUser/:userId", AuthController.updateUser);
AuthRouter.delete("/deleteUser/:userId", AuthController.deleteUser);

export default AuthRouter;
