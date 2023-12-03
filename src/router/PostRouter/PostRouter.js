import PostControler from "../../controller/PostController/PostController.js";
import PostValidator from "../../validator/PostValidator/PostValidator.js";
import { Router } from "express";

const postRouter = Router();

postRouter.post(
  "/createpost",
  PostValidator.validateCreatePost,
  PostControler.createPost
);
postRouter.get("/getAllPost", PostControler.getAllPosts);
postRouter.get("/searchPostById/:postId", PostControler.searchPostById);
postRouter.put("/updatePost/:postId", PostControler.updatePost);
postRouter.delete("/removePost/:postId", PostControler.deletePost);

export default postRouter;
