import followController from "../../controller/FollowController/FollowController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";
import { Router } from "express";
const followRouter = Router();

followRouter.post(
  "/followUser",
  AuthenticateMiddleware,
  followController.followUser
);
followRouter.get(
  "/getFollowersOfUser/:userId",
  followController.getFollowersOfUser
);
followRouter.get(
  "/getFollowingOfUser/:userId",
  AuthenticateMiddleware,
  followController.getFollowingOfUser
);
followRouter.post(
  "/unfollowUser",
  AuthenticateMiddleware,
  followController.unfollowUser
);

export default followRouter;
