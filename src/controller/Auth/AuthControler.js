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
      const user = await AuthService.loginUser(req, req.body);
      const { token, data } = user;

      return res
        .status(200)
        .json({ message: "User Loged in Sussceefully", token, data });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Bad Requset" });
    }
  },
};

export default AuthControler;
