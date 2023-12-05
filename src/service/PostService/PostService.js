import postModel from "../../model/PostModel/PostModel.js";
const PostServices = {
  createPost: async (userId, content) => {
    return await postModel.create({ userId, content });
  },

  getAllPosts: async () => {
    return await postModel.findAll({
      include: ["user"],
    });
    // apply pagination here : limit , offset , etc etc
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
