import ImageService from "../../service/ImageService/ImageService.js";

const ImageController = {
  uploadImage: async (req, res) => {
    try {
      const newImage = await ImageService.uploadImage(req.file);
      return res.status(201).json(newImage);
    } catch (error) {
      return res.status(500).json({ message: "Something bad happend" });
    }
  },
};

export default ImageController;
