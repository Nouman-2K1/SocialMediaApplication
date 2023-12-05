import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const ImageModel = sequelize.define("image", {
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ImageModel;
