"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userValidation = joi_1.default.object({
    fullName: joi_1.default.string()
        .required()
        .min(5)
        .messages({
        "any.required": "Full name is required",
        "string.min": "Full name must be at least 5 characters long"
    }),
    username: joi_1.default.string()
        .required()
        .min(5)
        .messages({
        'any.required': 'username required',
        'string.min': "username is too short"
    }),
    email: joi_1.default.string()
        .min(10)
        .max(30)
        .messages({
        "any.required": "email required",
        "string.min": "email is too short",
        "string.max": "email is too long"
    }),
    profilepic: joi_1.default.string()
        .optional(),
    status: joi_1.default.string()
        .optional(),
    password: joi_1.default.string()
        .required()
        .messages({
        "any.required": "password required"
    })
});
exports.default = userValidation;
