import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import usersModel from "../UserModel/UserModel.js";
import postModel from "../PostModel/PostModel.js";

const commentModel = sequelize.define("comment", {
  userComment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

usersModel.hasMany(commentModel);
commentModel.belongsTo(usersModel);

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);

export default commentModel;
