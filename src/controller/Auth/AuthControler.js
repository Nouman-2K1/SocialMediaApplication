import AuthService from "../../service/AuthService/AuthService.js";

const AuthControler = {
  registerUser: async (req, res) => {
    try {
      const user = await AuthService.registerUser(req.body);
      return res
        .status(201)
        .json({ message: "User Registered Sussessfully", user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Bad Request" });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await AuthService.loginUser(req.body);
      const { token, message } = user;
      return res
        .status(200)
        .json({ message: "User Loged in Sussceefully", token });
    } catch (error) {
      return res.status(403).json({ message: "Bad Requset" });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await AuthService.getAllUser();
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
      const user = await AuthService.getSpecificUser(req.params.userId);
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
      const user = await AuthService.updateUser(req.params.userId, req.body);
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
      const user = await AuthService.deleteUser(req.params.userId);
      if (!user) {
        return res.status(400).json({ message: "No User Found" });
      }
      return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Bad Request" });
    }
  },
};

export default AuthControler;
