import { Router } from "express";
import UserController from "../../controller/UserController/UserController.js";

const UserRouter = Router();

UserRouter.get("/", UserController.getAllUser);
UserRouter.get("/:userId", UserController.getSpecificUser);
UserRouter.put("/:userId", UserController.updateUser);
UserRouter.delete("/:userId", UserController.deleteUser);

export default UserRouter;
