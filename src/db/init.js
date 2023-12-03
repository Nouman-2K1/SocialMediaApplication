import followModel from "../model/FollowModel/FollowModel.js";
import likeModel from "../model/LikeModel/LikeModel.js";
import postModel from "../model/PostModel/PostModel.js";
import usersModel from "../model/UserModel/UserModel.js";
import commentModel from "../model/CommentModel/CommentModel.js";

const dbInit = async () => {
  await usersModel.sync({
    alter: true,
    force: false,
  });
  await postModel.sync({
    alter: true,
    force: false,
  });
  await likeModel.sync({
    alter: true,
    force: false,
  });
  await followModel.sync({
    alter: true,
    force: false,
  });
  await commentModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
