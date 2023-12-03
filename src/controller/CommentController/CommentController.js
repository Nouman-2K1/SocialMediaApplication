import commentService from "../../service/CommentService/CommentService.js";
const commentController = {
  commentOnPost: async (req, res) => {
    try {
      const { userId, postId, comment } = req.body;
      const comments = await commentService.commentOnPost(
        userId,
        postId,
        comment
      );
      return res.json(comments);
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  getCommentsOnPost: async (req, res) => {
    try {
      const comments = await commentService.getCommentsOnPost(
        req.params.postId
      );
      return res.json(comments);
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  getUsersWhoCommentedOnPost: async (req, res) => {
    try {
      const users = await commentService.getUsersWhoCommentedOnPost(
        req.params.postId
      );
      return res.json(users);
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default commentController;
