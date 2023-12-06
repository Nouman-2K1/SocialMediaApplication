import { Router } from "express";
import commentController from "../../controller/CommentController/CommentController.js";
import AuthenticateMiddleware from "../../middleware/authenticate.js";

const CommentRouter = Router();

CommentRouter.post(
  "/commentOnPost",
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
