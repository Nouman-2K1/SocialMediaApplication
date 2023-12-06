import usersModal from "../../model/UserModel/UserModel.js";
const UserService = {
  getAllUser: async (userdata) => {
    return await usersModal.findAll();
  },
  getSpecificUser: async (userdata) => {
    const { id } = userdata;
    return await usersModal.findByPk(id);
  },
  updateUser: async (userId, userData) => {
    const user = await usersModal.findByPk(userId);
    if (user) {
      await user.update(userData);
      return user;
    } else {
      return "user not found";
    }
  },
  deleteUser: async (userId) => {
    return await usersModal.destroy({
      where: { id: userId },
    });
  },
};

export default UserService;
