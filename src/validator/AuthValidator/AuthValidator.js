import Joi from "joi";

const AuthValidator = {
  validateRegisterUser: (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).max(100).required(),
      });

      const { error, value } = schema.validate(data);
      if (error) {
        return res.status(400).json({ messgae: "Invalid input", error });
      }
      next();
    } catch (error) {
      return res.status(500).json({ messgae: "bad data", error });
    }
  },
};

export default AuthValidator;
