"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userValidation_1 = __importDefault(require("../validations/userValidation"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body using Joi schema
        const { error, value: validatedUser } = userValidation_1.default.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        // Create a new User instance with validated data
        const user = new userSchema_1.default(validatedUser);
        // Save user to the database
        yield user.save();
        res.status(201).json({ message: "User registered successfully", user });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = signup;
