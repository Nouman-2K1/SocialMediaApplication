import { Router } from "express";
import likeController from "../../controller/LikeController/LikeController.js";

const likeRouter = Router();
// likeRouter.get("/post/:post_id/like", likeController.likePost);
// likeRouter.get("/post/:post_id/likes", likeController.likePost);

likeRouter.post("/likePost", likeController.likePost);
likeRouter.post("/unLikePost", likeController.unlikePost);
likeRouter.get(
  "/getLikesForAllPost/:postId",
  likeController.getLikesForAllPost
);

export default likeRouter;
