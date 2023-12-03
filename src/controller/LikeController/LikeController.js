import likeService from "../../service/LikeService/LikeService.js";

const likeController = {
  likePost: async (req, res) => {
    try {
      const like = await likeService.likePost(req.body.userId, req.body.postId);
      return res.json(like);
    } catch (error) {
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  unlikePost: async (req, res) => {
    try {
      await likeService.unlikePost(req.body.userId, req.body.postId);
      return res.json({
        message: "post unliked successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  getLikesForAllPost: async (req, res) => {
    try {
      const likes = await likeService.getLikesForAllPost(req.params.postId);
      return res.json(likes);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  getUsersWhoLikedPost: async (req, res) => {
    try {
      const user = await likeService.getUsersWhoLikedPost(req.params.postId);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },
};

export default likeController;
