import likeModel from "../../model/LikeModel/LikeModel.js";
import usersModel from "../../model/UserModel/UserModel.js";
import postModel from "../../model/PostModel/PostModel.js";

const likeService = {
  likePost: async (userId, postId) => {
    const post = await postModel.findByPk(postId);
    if (!post) {
      return { message: "post not found" };
    }
    post.likeCount += 1;
    await post.save();
    await likeModel.create({ userId, postId });

    return { message: "Post Liked Succrssfully" };
  },

  unlikePost: async (userId, postId) => {
    const post = await postModel.findByPk(userId);
    if (!post) {
      return { message: "post not found" };
    }
    if (post.likeCount === 0) {
      return { message: "Post has already Zero likes" };
    }
    post.likeCount -= 1;
    await post.save();
    await likeModel.destroy({
      where: { userId, postId },
    });
    return { message: "Post Unliked Successfully" };
  },

  getLikesForAllPost: async (postId) => {
    return await likeModel.findAll({
      where: { postId },
      attributes: { exclude: ["createdAt", "id", "updatedAt"] },
      include: [usersModel, postModel],
    });
  },

  getUsersWhoLikedPost: async (postId) => {
    return await likeModel.findAll({
      where: { postId },
      include: [
        {
          model: usersModel,
        },
      ],
    });
  },
};

export default likeService;
