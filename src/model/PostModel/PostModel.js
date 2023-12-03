import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import usersModel from "../UserModel/UserModel.js";
const postModel = sequelize.define("post", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likeCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

usersModel.hasMany(postModel);
postModel.belongsTo(usersModel);

export default postModel;
