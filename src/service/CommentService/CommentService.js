import postModel from "../../model/PostModel/PostModel.js";
import usersModel from "../../model/UserModel/UserModel.js";
import commentModel from "../../model/CommentModel/CommentModel.js";

const commentService = {
  commentOnPost: async (userId, postId, comment) => {
    return await commentModel.create({ userId, postId, comment });
  },

  getCommentsOnPost: async (id) => {
    return await postModel.findAll({
      where: { id },
      include: commentModel,
    });
  },

  getUsersWhoCommentedOnPost: async (id) => {
    return await commentModel.findAll({
      where: { id },
      include: { usersModel },
    });
  },
};

export default commentService;
