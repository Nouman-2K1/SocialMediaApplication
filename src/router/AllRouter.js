import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import postRouter from "./PostRouter/PostRouter.js";
import likeRouter from "./LikeRouter/LikeRouter.js";
import CommentRouter from "./CommentRouter/CommentRouter.js";
import followRouter from "./FollowRouter/FollowRouter.js";
import ImageRouter from "./ImageRouter/ImageRouter.js";
import UserRouter from "./UserRouter/UserRouter.js";
const AllRouter = Router();

AllRouter.use("/auth", AuthRouter);
AllRouter.use("/post", postRouter);
AllRouter.use("/like", likeRouter);
AllRouter.use("/comment", CommentRouter);
AllRouter.use("/follow", followRouter);
AllRouter.use("/image", ImageRouter);
AllRouter.use("/user", UserRouter);

export default AllRouter;
