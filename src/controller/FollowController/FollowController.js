import followService from "../../service/FollowService/FollowService.js";
const followController = {
  followUser: async (req, res) => {
    try {
      await followService.followUser(
        req.body.followerUserId,
        req.body.followingUserId
      );
      return res.json({
        message: "followed successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  getFollowersOfUser: async (req, res) => {
    try {
      const followers = await followService.getFollowersofUser(
        req.params.userId
      );
      return res.json(followers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  getFollowingOfUser: async (req, res) => {
    try {
      const following = await followService.getFollowingOfUser(
        req.params.userId
      );
      return res.json(following);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      await followService.unfollowUser(
        req.body.followerUserId,
        req.body.followingUserId
      );
      return res.json({
        message: "unfollowed successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },
};

export default followController;
