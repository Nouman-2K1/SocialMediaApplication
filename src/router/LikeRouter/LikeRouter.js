import { Router } from "express";
import likeController from "../../controller/LikeController/LikeController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";

const likeRouter = Router();
// likeRouter.get("/post/:post_id/like", likeController.likePost);
// likeRouter.get("/post/:post_id/likes", likeController.likePost);

likeRouter.post("/likePost", AuthenticateMiddleware, likeController.likePost);
likeRouter.post(
  "/unLikePost",
  AuthenticateMiddleware,
  likeController.unlikePost
);
likeRouter.get(
  "/getLikesForAllPost/:postId",
  likeController.getLikesForAllPost
);

export default likeRouter;
