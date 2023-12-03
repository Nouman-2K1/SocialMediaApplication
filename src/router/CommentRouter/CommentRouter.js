import { Router } from "express";
import commentController from "../../controller/CommentController/CommentController.js";

const CommentRouter = Router();

CommentRouter.post("/commentOnPost", commentController.commentOnPost);
CommentRouter.get("/getCommentsOnPost", commentController.getCommentsOnPost);
CommentRouter.get(
  "/getUsersWhoCommentedOnPost",
  commentController.getUsersWhoCommentedOnPost
);

export default CommentRouter;
