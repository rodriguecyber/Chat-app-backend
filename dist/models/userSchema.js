"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSehma = new mongoose_1.default.Schema({
    fullName: String,
    username: String,
    email: String,
    profilepic: {
        type: String,
        default: 'no profile'
    },
    password: String,
    status: {
        type: String,
        default: 'offline'
    }
});
const User = mongoose_1.default.model('User', userSehma);
exports.default = User;
