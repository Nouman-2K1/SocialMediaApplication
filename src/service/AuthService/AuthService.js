import usersModal from "../../model/UserModel/UserModel.js";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import LoginEmail from "../../email/login.js";

const AuthService = {
  registerUser: async (userdata) => {
    const { name, email, password } = userdata;
    const userExist = await usersModal.findOne({ where: { email: email } });
    if (userExist) {
      throw new Error(`user with this ${email} already exist`);
    }
    const hashedPassword = await hash(password, 10);
    await usersModal.create({
      name,
      email,
      password: hashedPassword,
    });
  },

  loginUser: async (userdata) => {
    const { email, password } = userdata;
    const user = await usersModal.findOne({ where: { email } });
    if (!user) {
      throw new Error(`user with this ${email} do not exist`);
    }
    const comparePassword = await compare(password, user.password);
    if (!comparePassword) {
      throw new Error(`Invalid Password`);
    }
    const data = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });
    LoginEmail({
      from: "noman@mr10.com",
      to: user.email,
      subject: "Login Notification",
      text: "We detected a new login if that wasn't ypu please contact support or reset password",
    });
    // req.session.token = token;
    // req.session.user = data;
    // req.session.save();
    return {
      message: "User login",
      token,
      data,
    };
  },

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

export default AuthService;
