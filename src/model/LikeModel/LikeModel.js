import sequelize from "../../db/config.js";
import usersModel from "../UserModel/UserModel.js";
import postModel from "../PostModel/PostModel.js";

const likeModel = sequelize.define("like", {});

usersModel.hasMany(likeModel);
likeModel.belongsTo(usersModel);

postModel.hasMany(likeModel);
likeModel.belongsTo(postModel);

export default likeModel;
