import UserService from "../../service/UserService/UserService.js";
const UserController = {
  getAllUser: async (req, res) => {
    try {
      const user = await UserService.getAllUser();
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
  getSpecificUser: async (req, res) => {
    try {
      const user = await UserService.getSpecificUser(req.params.userId);
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await UserService.updateUser(req.session.user.id, req.body);
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      return res
        .status(200)
        .json({ message: "User Updated Successfully", user });
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserService.deleteUser(req.params.userId);
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
};

export default UserController;
