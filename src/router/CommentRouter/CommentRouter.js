import { Router } from "express";
import commentController from "../../controller/CommentController/CommentController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";

const CommentRouter = Router();

CommentRouter.post(
  "/post/:postId/comment",
  AuthenticateMiddleware,
  commentController.commentOnPost
);
CommentRouter.get(
  "/getCommentsOnPost",
  AuthenticateMiddleware,
  commentController.getCommentsOnPost
);
CommentRouter.get(
  "/getUsersWhoCommentedOnPost",
  AuthenticateMiddleware,
  commentController.getUsersWhoCommentedOnPost
);

export default CommentRouter;
