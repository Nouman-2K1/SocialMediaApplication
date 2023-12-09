import postModel from "../../model/PostModel/PostModel.js";
const PostServices = {
  createPost: async (userId, content) => {
    return await postModel.create({ userId, content });
  },

  getAllPosts: async (page, pageSize) => {
    const offset = (page - 1) * pageSize;
    return await postModel.findAll({
      include: ["user"],
      limit: pageSize,
      offset: offset,
    });
  },
  searchPostById: async (postId) => {
    return await postModel.findByPk(postId, {
      include: ["user"],
    });
  },
  updatePost: async (postId, content) => {
    const post = await postModel.findByPk(postId);
    if (post) {
      post.content = content;
      await post.save();
      return post;
    } else {
      return "post not found";
    }
  },

  deletePost: async (postId) => {
    return await postModel.destroy({
      where: { id: postId },
    });
  },
};

export default PostServices;
