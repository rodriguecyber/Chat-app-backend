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
const userSchema_1 = __importDefault(require("../models/userSchema"));
const authToken_1 = require("../middleware/authToken");
const passwordHashing_1 = require("../middleware/passwordHashing");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userSchema_1.default.findOne({ email });
        if (user) {
            if (yield (0, passwordHashing_1.verifyPassword)(password, user.password)) {
                const token = yield (0, authToken_1.loginToken)(user);
                res.status(200).json({ message: "loged in", token: token });
            }
            else {
                res.status(401).json("password not match");
            }
        }
        else {
            res.status(401).json("user not found");
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = login;
