import PostControler from "../../controller/PostController/PostController.js";
import PostValidator from "../../validator/PostValidator/PostValidator.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";
import { Router } from "express";

const postRouter = Router();
postRouter.post(
  "/",
  PostValidator.validateCreatePost,
  AuthenticateMiddleware,
  PostControler.createPost
);
postRouter.get("/", AuthenticateMiddleware, PostControler.getAllPosts);
postRouter.get(
  "/:postId",
  AuthenticateMiddleware,
  PostControler.searchPostById
);
postRouter.put("/:postId", AuthenticateMiddleware, PostControler.updatePost);
postRouter.delete("/:postId", AuthenticateMiddleware, PostControler.deletePost);

export default postRouter;
