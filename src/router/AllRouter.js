import AuthRouter from "./AuthRouter/AuthRouter.js";
import { Router } from "express";
import postRouter from "./PostRouter/PostRouter.js";
import likeRouter from "./LikeRouter/LikeRouter.js";
import CommentRouter from "./CommentRouter/CommentRouter.js";
import followRouter from "./FollowRouter/FollowRouter.js";
import ImageRouter from "./ImageRouter/ImageRouter.js";
const AllRouter = Router();

AllRouter.use("/user", AuthRouter);
AllRouter.use("/post", postRouter);
AllRouter.use("/like", likeRouter);
AllRouter.use("/comment", CommentRouter);
AllRouter.use("/follow", followRouter);
AllRouter.use("/image", ImageRouter);

export default AllRouter;
