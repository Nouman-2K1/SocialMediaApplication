import followController from "../../controller/FollowController/FollowController.js";
import { Router } from "express";
const followRouter = Router();

followRouter.post("/followUser", followController.followUser);
followRouter.get(
  "/getFollowersOfUser/:userId",
  followController.getFollowersOfUser
);
followRouter.get(
  "/getFollowingOfUser/:userId",
  followController.getFollowingOfUser
);
followRouter.post("/unfollowUser", followController.unfollowUser);

export default followRouter;
