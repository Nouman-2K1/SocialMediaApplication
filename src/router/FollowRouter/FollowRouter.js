import followController from "../../controller/FollowController/FollowController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";
import { Router } from "express";
const followRouter = Router();

followRouter.post(
  "/user/:followingUserId/followUser",
  AuthenticateMiddleware,
  followController.followUser
);
followRouter.get("/getFollowersOfUser", followController.getFollowersOfUser);
followRouter.get(
  "/getFollowingOfUser",
  AuthenticateMiddleware,
  followController.getFollowingOfUser
);
followRouter.post(
  "/user/:followingUserId/unfollowUser",
  AuthenticateMiddleware,
  followController.unfollowUser
);
export default followRouter;
