import PostServices from "../../service/PostService/PostService.js";

const PostControler = {
  createPost: async (req, res) => {
    try {
      const post = await PostServices.createPost(
        req.body.userId,
        req.body.content
      );
      return res.json(post);
    } catch (error) {
      return res.status(500).json("Something bad happened");
    }
  },
  getAllPosts: async (req, res) => {
    try {
      const posts = await PostServices.getAllPosts();
      return res.json(posts);
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  searchPostById: async (req, res) => {
    try {
      const post = await PostServices.searchPostById(req.params.postId);
      if (!post) {
        return res.status(404).json({
          message: "post not found",
        });
      }
      return res.json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  updatePost: async (req, res) => {
    try {
      const updatedPost = await PostServices.updatePost(
        req.params.postId,
        req.body.content
      );
      if (!updatedPost) {
        return res.status(404).json({
          message: "post not found",
        });
      }
      return res.json(updatedPost);
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  deletePost: async (req, res) => {
    try {
      const deletedPost = await PostServices.deletePost(req.params.postId);
      if (!deletedPost) {
        return res.status(404).json({
          message: "post not found",
        });
      }
      return res.json({
        message: "post deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default PostControler;
