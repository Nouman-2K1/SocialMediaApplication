import ImageModel from "../../model/ImageModel/ImageModel.js";
const ImageService = {
  uploadImage: async function uploadImage(file) {
    const { originalname, filename } = file;
    if (!filename) {
      throw new Error("No file uploaded");
    }
    const newImage = await ImageModel.create({ filename: originalname });
    return newImage;
  },
};

export default ImageService;
