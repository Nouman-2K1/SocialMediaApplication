import PostControler from "../../controller/PostController/PostController.js";
import PostValidator from "../../validator/PostValidator/PostValidator.js";
import { Router } from "express";

const postRouter = Router();
// apply middleware auth
postRouter.post(
  "/",
  PostValidator.validateCreatePost,
  PostControler.createPost
);
postRouter.get("/", PostControler.getAllPosts);
postRouter.get("/:postId", PostControler.searchPostById);
postRouter.put("/:postId", PostControler.updatePost);
postRouter.delete("/:postId", PostControler.deletePost);

export default postRouter;
