import followModel from "../../model/FollowModel/FollowModel.js";
import usersModel from "../../model/UserModel/UserModel.js";

const followService = {
  followUser: async (followerUserId, followingUserId) => {
    return await followModel.create({ followerUserId, followingUserId });
  },

  getFollowersForUser: async (userId) => {
    return await usersModel.findAll({
      include: [
        {
          model: usersModel,
          as: "followers",
        },
      ],
    });
  },

  getFollowingForUser: async (userId) => {
    return await usersModel.findByPk(userId, {
      include: [
        {
          model: usersModel,
          as: "following",
        },
      ],
    });
  },

  unfollowUser: async (followerUserId, followingUserId) => {
    return await followModel.destroy({
      where: { followerUserId, followingUserId },
    });
  },
};

export default followService;
