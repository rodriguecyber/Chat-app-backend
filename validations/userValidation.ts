import Joi from "joi";
const userValidation = Joi.object({
  fullName: Joi.string()
    .required()
    .min(5)
    .messages({
      "any.required": "Full name is required",
      "string.min": "Full name must be at least 5 characters long"
    }),
    username:Joi.string()
    .required()
    .min(5)
    .messages({
      'any.required':'username required',
      'string.min':"username is too short"
    }),
    email:Joi.string()
    .min(10)
    .max(30)
    .messages({
      "any.required":"email required",
      "string.min":"email is too short",
      "string.max":"email is too long"
    }),
    profilepic:Joi.string()
     .optional(),
     status:Joi.string()
     .optional(),
     password:Joi.string()
     .required()
     .messages({
      "any.required":"password required"
     }
     )


});

export default userValidation;
