import { Router } from "express";
import UserController from "../../controller/UserController/UserController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";
const UserRouter = Router();

UserRouter.get("/", AuthenticateMiddleware, UserController.getAllUser);
UserRouter.get(
  "/:userId",
  AuthenticateMiddleware,
  UserController.getSpecificUser
);
UserRouter.put("/", AuthenticateMiddleware, UserController.updateUser);
UserRouter.delete(
  "/:userId",
  AuthenticateMiddleware,
  UserController.deleteUser
);

export default UserRouter;
