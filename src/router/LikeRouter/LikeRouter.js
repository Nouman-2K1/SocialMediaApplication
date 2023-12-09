import { Router } from "express";
import likeController from "../../controller/LikeController/LikeController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";

const likeRouter = Router();

likeRouter.post(
  "/post/:postId/like",
  AuthenticateMiddleware,
  likeController.likePost
);
likeRouter.post(
  "/post/:postId/unLikePost",
  AuthenticateMiddleware,
  likeController.unlikePost
);
likeRouter.get(
  "/getLikesForAllPost/:postId",
  likeController.getLikesForAllPost
);

export default likeRouter;
